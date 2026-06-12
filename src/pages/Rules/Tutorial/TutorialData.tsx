import { CardColors } from "../../../ts/types";
import { Dissection } from "./Dissection/Dissection";
import { SetAnalysis } from "./SetAnalysis/SetAnalysis";

export const tutorialData = [
  {
    id: "question-1",
    color: CardColors.Red,
    question: "How to play?",
    answer: `Look at the cards on the board and <strong>keep selecting sets</strong> - until you deplete the whole deck (81 cards).
That's it. <strong>Your only opponent is time.</strong>`,
  },
  {
    id: "question-2",
    color: CardColors.Green,
    question: "What's a set?",
    answer: `<p>A SET consists of <strong>three cards</strong> which
- in terms of symbol count, color, shape, and pattern -
are either <strong>all the same</strong> or <strong>all different</strong>.</p>`,
  },
  {
    id: "question-3",
    color: CardColors.Purple,
    question: "How to identify sets?",
    answer: <Dissection cards={[
          "purple-stadium-blank-1",
          "green-stadium-blank-3",
          "red-stadium-blank-2",
        ]}/>,
  },
];
