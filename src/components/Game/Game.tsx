import { useState, useEffect } from "react";

import "./Game.css";
import { Status } from "../../ts/types";
import { generateDeck, check, checkAll } from "../../utils/deck";
import Card from "../Card/Card";
import GameGrid from "../ui/GameGrid";
import GameOver from "../GameOver/GameOver";
import { motion } from "framer-motion";
import { GameNav } from "./GameNav/GameNav";
import { useWindowSize } from "@uidotdev/usehooks";
import { getVariants } from "./GameUtils";

export enum GameStatus {
  Ready = "isReady",
  On = "isOn",
  Over = "isOver",
}
function Game({ onOver }: any) {
  const [deck, setDeck] = useState<Array<string>>([]);
  const [activeCards, setActiveCards] = useState<Array<string>>([]);
  const [visibleCards, setVisibleCards] = useState<Array<string>>([]);
  const [currentStatus, setCurrentStatus] = useState<Status>("active");
  const [duration, setDuration] = useState<number | null>(0);
  const [gameStatus, setGameStatus] = useState(GameStatus.Ready);
  const [possibleSet, setPossibleSet] = useState<string[] | boolean>(false);
  const size = useWindowSize();

  useEffect(() => {
    let newDeck = generateDeck();
    setDeck(newDeck.slice(12));
    setVisibleCards(newDeck.slice(0, 12));
    setGameStatus(GameStatus.On);
  }, []);

  useEffect(() => {
    if (gameStatus === GameStatus.On && deck.length < 1) {
      const setsPresent = checkAll(visibleCards);
      !setsPresent && setGameStatus(GameStatus.Over);
    }
  }, [deck, gameStatus, visibleCards]);

  useEffect(() => {
    if (activeCards.length === 3 && currentStatus === "active") {
      const isSet = check(activeCards);
      setCurrentStatus(isSet ? "accepted" : "rejected");
    }
  }, [activeCards, currentStatus]);

  const handleButton = () => {
    Array.isArray(possibleSet) && setActiveCards(possibleSet);
  };

  const replaceCards = (cards: Array<string>) => {
    const newVisibleCards: string[] = [];
    const replacements = deck.slice(0, 3);

    if (replacements.length < 3) {
      removeCards(cards);
    } else {
      [...visibleCards].forEach((cardId) => {
        if (cards.includes(cardId)) {
          newVisibleCards.push(replacements[0]);
          replacements.splice(0, 1);
        } else {
          newVisibleCards.push(cardId);
        }
      });
    }
    setVisibleCards(newVisibleCards);
    setPossibleSet(false);
    setDeck(deck.slice(3));
    setActiveCards([]);
  };

  const addCards = () => {
    const newCards = [...visibleCards].concat(deck.slice(0, 3));
    setVisibleCards(newCards);
    setDeck(deck.slice(3));
  };

  const removeCards = (cards: Array<string>) => {
    const newVisibleCards = [...visibleCards].filter(
      (card) => !cards.includes(card),
    );
    setVisibleCards(newVisibleCards);
  };

  const handleCardClick = (id: string) => {
    const newActiveCards = activeCards.includes(id)
      ? [...activeCards].filter((card) => card !== id)
      : [...activeCards, id];
    setActiveCards(newActiveCards);
  };

  useEffect(() => {
    if (["accepted", "rejected"].includes(currentStatus)) {
      setTimeout(() => {
        if (currentStatus === "accepted") {
          visibleCards.length <= 12 && deck.length > 1
            ? replaceCards(activeCards)
            : removeCards(activeCards);
        }
        setActiveCards([]);
        setCurrentStatus("active");
      }, 800);
    }
  }, [currentStatus, deck, visibleCards]);

  useEffect(() => {
    if (!possibleSet && visibleCards.length > 3) {
      const setsPresent = checkAll(visibleCards);
      if (!setsPresent) {
        addCards();
        possibleSet && setPossibleSet(false);
      } else {
        !possibleSet && setPossibleSet(setsPresent);
      }
    }
  }, [visibleCards, possibleSet]);
  const isOver = gameStatus === GameStatus.Over;

  return (
    <div className="Page">
      <GameGrid>
        {visibleCards?.map((id: string, i: number) => {
          const variants = getVariants(i, size?.width);
          return (
            <motion.div
              key={`motion-card-${id}`}
              className="CardWrapper"
              variants={variants}
              animate={gameStatus}>
              <Card
                handleClick={() => handleCardClick(id)}
                status={activeCards.includes(id) ? currentStatus : "default"}
                id={id}
              />
            </motion.div>
          );
        })}
        {isOver && <GameOver duration={duration} onOver={onOver} />}
      </GameGrid>

      {!isOver && (
        <motion.div className="GameOverWrapper">
          <GameNav
            gameStatus={gameStatus}
            setDuration={setDuration}
            handleButton={handleButton}
          />
        </motion.div>
      )}
    </div>
  );
}

export default Game;
