import { ReactNode } from "react";
import "./GameGrid.css";

interface Props {
  children?: ReactNode;
  className?: string;
}

function GameGrid({ children, className, ...props }: Props) {
  return (
    <div className={`GameGrid ${className}`} {...props}>
      {children}
    </div>
  );
}

export default GameGrid;
