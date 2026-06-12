import { ReactNode } from "react";
import "./BlankCard.css";

function BlankCard({
  children,
  className,
  style,
}: {
  style?: any;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`BlankCard ${className}`} style={style}>
      {children}
    </div>
  );
}

export default BlankCard;
