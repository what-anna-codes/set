import { CardColors } from "../../../ts/types";
import BlankButton from "../../ui/BlankButton/BlankButton";
import Timer from "../../Timer/Timer";
import "./GameNav.css";

export function GameNav({ gameStatus, setDuration, handleButton }: any) {
  return (
    <div className="GameNav">
      <Timer gameStatus={gameStatus} liftDuration={setDuration} />
      <BlankButton
        className={`AddCardsButton ${CardColors.Purple}`}
        onClick={handleButton}
        content={"hint"}
      />
    </div>
  );
}
