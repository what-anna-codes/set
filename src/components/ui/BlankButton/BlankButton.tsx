import { ReactNode } from "react";

import "./BlankButton.css";

function BlankButton({
  content,
  disabled = false,
  onClick,
  className,
}: {
  content?: ReactNode;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}) {
  return (
    <button
      className={`BlankButton ${className}`}
      disabled={disabled}
      onClick={onClick}>
      {content}
    </button>
  );
}

export default BlankButton;
