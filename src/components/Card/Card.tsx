import "./Card.css";
import CardSymbol from "./Symbol/Symbol";
import { ICard } from "../../ts/types";
import { getFeatures } from "../../utils/deck";
import BlankCard from "../ui/BlankCard";

function Card({ handleClick, id, status = "default", className }: ICard) {
  const { number } = getFeatures(id);
  if (!id) return null;
  return (
    <BlankCard>
      <div
        className={`Card ${status} ${className}`}
        data-id={id}
        onClick={handleClick}>
        {Array.from({ length: number }).map((_, i) => (
          <CardSymbol key={`symbol-${id}-${i}`} id={id} />
        ))}
      </div>
    </BlankCard>
  );
}

export default Card;
