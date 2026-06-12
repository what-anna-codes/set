import { JSX } from "react";

import { sampleCardIds } from "../../utils/deck";
import Card from "../../components/Card/Card";
 
import { CardColors } from "../../ts/types";
import "../Play/Play.css";
import CardLink from "../../components/ui/CardLink/CardLink";
import GameGrid from "../../components/ui/GameGrid";

interface Props {
  onTabChange: (tab: "play" | "rules" | "results") => void;
}

function Home({ onTabChange }: Props): JSX.Element {
  return (
    <div className="page">
      <GameGrid>
        <CardLink onClick={() => onTabChange("play")} label="play" color={CardColors.Red} />
        <CardLink onClick={() => onTabChange("rules")} label="learn" color={CardColors.Green} />
        {sampleCardIds.slice(0, 9).map((id) => (
          <Card
            key={`home_card-${id}`}
            id={id}
            status="default"
            className="backface"
          />
        ))}
        <CardLink
          onClick={() => onTabChange("results")}
          label="best results"
          color={CardColors.Purple}
        />
      </GameGrid>
    </div>
  );
}

export default Home;
