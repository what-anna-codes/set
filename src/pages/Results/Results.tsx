import { useQuery } from "@apollo/client";

import "./Results.css";
import TimeResult from "../../components/TimeResult/TimeResult";
import { CardColors } from "../../ts/types";
import { TabType } from "../../hooks/useTabs";
import { ResultsDocument, ResultsQuery } from "../../components/__generated__/graphql";
import BlankCard from "../../components/ui/BlankCard";
import CardLink from "../../components/ui/CardLink/CardLink";
import GameGrid from "../../components/ui/GameGrid";

interface Props {
  onTabChange: (tab: TabType) => void;
  resultId?: string;
}

function Results({ onTabChange, resultId }: Props) {
  const { data, loading } = useQuery<ResultsQuery>(ResultsDocument);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="Results">
      <h1>Best Results</h1>
      <GameGrid className="Results__Grid">
        {data?.results.map(
          (result, i) =>
            result.seconds && (
              <BlankCard
                className={`Result
                  ${resultId === result.id ? "Result-active" : ""}
                  ${i % 18 < 6 ? CardColors.Red : i % 18 < 12 ? CardColors.Green : CardColors.Purple}`}
                key={result.id}>
                <h6 className="Result__player">{result.username}</h6>
                <TimeResult duration={result.seconds} />
              </BlankCard>
            ),
        )}
      </GameGrid>
      <CardLink
        className="Card-Link PlayAgainCard"
        label="play"
        color="purple"
        onClick={() => onTabChange('play')}
      />
    </div>
  );
}

export default Results;
