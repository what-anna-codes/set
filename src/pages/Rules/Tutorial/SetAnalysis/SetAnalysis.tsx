import CardSymbol from "../../../../components/Card/Symbol/Symbol";
import { FeatureNames } from "../../../../ts/types";
import { getFeatures } from "../../../../utils/deck";

import "./SetAnalysis.css";

export const CardCell = ({
  cardId,
  label,
  value,
  classNames,
}: {
  cardId: string;
  label: FeatureNames;
  value: string | number;
  classNames?: string;
}) => {
  console.log("label", label, "value", value);
  if (label === "color" || label === "fill") {
    return (
      <div className="Cell">
        <div className={`Box Box-${value}`}> </div>
      </div>
    );
  }
  if (label === "shape") {
    return (
      <div className="Cell">
        <CardSymbol
          style={{
            width: "auto",
            stroke: "black",
            height: "3rem",
            margin: "auto",
            padding: "0.3rem 0",
            opacity: 0.5,
            transform: "rotate(90deg) translateX(-.2rem)",
            fill: "black",
            transformOrigin: "center",
          }}
          id={cardId}
        />
      </div>
    );
  }
  return <div className={`Cell ${classNames}`}>{value}</div>;
};


export const featureNames = ["color", "shape", "fill", "number"] as const;

export const SetAnalysis = ({ cards }: { cards: string[] }) => {
  if (cards.length < 3) {
    return null;
  }
  const cardFeatures = cards.map((card) => getFeatures(card));
  const rows = featureNames.map((featureName: FeatureNames) => {
    const uniqueValueCount = new Set(cardFeatures.map((f) => f[featureName]))
      .size;
    const result =
      uniqueValueCount === 1
        ? "all the same ✔"
        : uniqueValueCount === 3
          ? "all different ✔"
          : "invalid ✘";

    return (
      <div className="FeatureRow" key={featureName}>
        <div className="FeatureLabel">
          {featureName === "fill"
            ? "pattern"
            : featureName === "number"
              ? "count"
              : featureName}
          s:
        </div>
        {cardFeatures.map((f, i) => (
          <CardCell
            cardId={cards[i]}
            label={featureName}
            value={f[featureName]}
          />
        ))}
        <div className="SetAnalysisResult">{result}</div>
      </div>
    );
  });
  return <>{rows}</>;
};
