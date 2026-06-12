import Game from "../../components/Game/Game";
import BackButton from "../../components/ui/BackButton/BackButton";
import "./Play.css";
 
interface Props {
  onBack: () => void;
  onOver: any;
}

function Play({ onBack, onOver }: Props) {
  return (
    <div className="Page PlayPage">
      <BackButton onBack={onBack} />
      <Game onOver={onOver} />
    </div>
  );
}

export default Play;
