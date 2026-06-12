import { useEffect, Dispatch, SetStateAction } from "react";
import { useTimer } from "use-timer";

import { GameStatus } from "../Game/Game";
import TimeResult from "../TimeResult/TimeResult";
import { CardColors } from "../../ts/types";
import BlankButton from "../ui/BlankButton/BlankButton";

interface Props {
  gameStatus: GameStatus;
  liftDuration: Dispatch<SetStateAction<number | null>>;
}

function Timer({ gameStatus, liftDuration }: Props) {
  const { time, start, pause, status } = useTimer({
    initialTime: 0,
  });

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    liftDuration(time);
  }, [time]);

  useEffect(() => {
    if (gameStatus === GameStatus.Over) {
      pause();
    }
  }, [gameStatus]);

  return (
    <BlankButton
      className={`Timer ${CardColors.Purple}`}
      disabled={status !== "RUNNING" && time !== 0}
      onClick={() => {
        pause();
        liftDuration(null);
      }}
      content={<TimeResult duration={time} />}
    />
  );
}

export default Timer;
