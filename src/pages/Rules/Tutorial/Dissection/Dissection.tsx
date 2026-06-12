import Card from "../../../../components/Card/Card";
import { SetAnalysis } from "../SetAnalysis/SetAnalysis";
import "./Dissection.css";
export function Dissection({ cards }: { cards: string[] }) {
  return (
    <div className="Dissection">
      <p className="Explanation">
        <strong>Examine not the cards but their features</strong> - color,
        shape, background, symbol count.
      </p>
      <br />
      <p>
        Let's start with <strong>color</strong>. Is it the same on all cards?
        Good! Is it different on every card? Also good!
        <strong>
          {" "}
          But if two cards share a color and one does not - stop checking.{" "}
        </strong>
        It's definitely not a set.
      </p>
      <br />
      <p>
        The same goes for shapes, backgrounds, and symbol count.{" "}
        <strong>
          If you see either one variant or all three - you may have a SET
        </strong>
        . But if only two variants appear, better pick some other cards.
      </p>
      <br />
      <p>For a full analysis, look at the table below:</p>
      {/* and examine, one by one, their four features:
        <strong> color, shape, fill, symbol count</strong>. */}

      <div className="Dissection_cards">
        {cards.map((cardId) => (
          <Card key={cardId} id={cardId} status="default" />
        ))}
      </div>
      <SetAnalysis cards={cards} />
    </div>
  );
}
