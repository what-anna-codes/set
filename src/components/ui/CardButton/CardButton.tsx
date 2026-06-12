import { ReactNode } from "react";
import "./CardButton.css";
import BlankCard from "../BlankCard";
import { Color } from "../../../ts/types";

interface Props {
  label: string | ReactNode;
  color: Color;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function CardButton({ label, color, disabled, className, ...props }: Props) {
  return (
    <BlankCard className={disabled ? "BlankCard-disabled" : ""}>
      <button
        {...props}
        className={`Card CardButton ${color} ${className || ""}`}>
        {label}
      </button>
    </BlankCard>
  );
}

export default CardButton;
