import BackButton from "../../components/ui/BackButton/BackButton";
import CardLink from "../../components/ui/CardLink/CardLink";
import "./Rules.css";
import Tutorial from "./Tutorial/Tutorial";

interface Props {
  onBack: () => void;
}

function Rules({ onBack }: Props) {
  return (
    <div className="Rules Page" data-id="Rules">
      <BackButton onBack={onBack} />
      <Tutorial />
      <CardLink
        label="play"
        className="Card-Link PlayAgainCard"
        color="green"
        onClick={() => {}}
      />
    </div>
  );
}

export default Rules;
