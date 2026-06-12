import { CardColors } from "../../../../ts/types";
import "./TutorialStep.css";

interface Props {
  onClick: () => void;
  color: CardColors;
  children: React.ReactNode;
  isSelected: boolean;
  data: { id: string; question: string; answer: string | React.ReactNode };
}

function TutorialStep({
  data,
  color,
  isSelected = false,
  onClick,
  children,
}: Props) {
  const { question, answer } = data;
  if (!data) return null;
  console.log("data", data);
  return (
    <div
      className={`TutorialStep ${color} ${isSelected && "TutorialStepSelected"}`}
      onClick={onClick}>
      <h2 className="TutorialStepTitle">{question}</h2>
      {typeof answer === "string" ? (
        <div
          className="TutorialStepAnswer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ) : (
        <div className="TutorialStepAnswer">{answer}</div>
      )}
      {children}
    </div>
  );
}

export default TutorialStep;
