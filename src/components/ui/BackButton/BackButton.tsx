import "./BackButton.css";

interface Props {
  onBack: () => void;
}

function BackButton({ onBack }: Props) {
  return (
    <button className="BackButton_wrapper" onClick={onBack}>
      <button className="BackButton">back</button>
    </button>
  );
}

export default BackButton;
