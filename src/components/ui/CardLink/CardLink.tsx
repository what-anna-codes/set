import { ReactNode } from "react";
import CardButton from "../CardButton";
import { Color } from "../../../ts/types";
import "./CardLink.css";

interface Props {
  label: string | ReactNode;
  color: Color;
  className?: string;
  onClick: () => void;
}

function CardLink({ label, color, className, onClick }: Props) {
  return (
    <button onClick={onClick} style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}>
      <CardButton className={className} label={label} color={color} />
    </button>
  );
}

export default CardLink;
