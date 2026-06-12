import "./Tutorial.css";

import { useState } from "react";
import TutorialStep from "./TutorialStep/TutorialStep";
import { tutorialData } from "./TutorialData";
import BlankButton from "../../../components/ui/BlankButton/BlankButton";

function Tutorial() {
  const [currentStep, setCurrentStep] = useState(tutorialData[0].id);

  return (
    <div className="Tutorial">
      {tutorialData.map((step, index) => (
        <TutorialStep
          key={step.id}
          isSelected={step.id === currentStep}
          color={step.color}
          data={step}
          onClick={() => setCurrentStep(step.id)}>
          {index === tutorialData.length - 1 ? null : (
            <BlankButton
              className={`Next ${step.color}`}
              content="Next"
              onClick={(e: any) => {
                e.stopPropagation();
                e.preventDefault();
                const nextStep = tutorialData[index + 1]?.id ?? "question-1";
                setCurrentStep(nextStep);
              }}
            />
          )}
        </TutorialStep>
      ))}
    </div>
  );
}

export default Tutorial;
