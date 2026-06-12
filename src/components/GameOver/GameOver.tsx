import "./GameOver.css";

import { useState } from "react";
import { CreateResultDocument, ResultsDocument } from "../__generated__/graphql";
import { motion } from "framer-motion";
import { useMutation } from "@apollo/client";
import BlankButton from "../ui/BlankButton/BlankButton";
import TimeResult from "../TimeResult/TimeResult";

interface Props {
  duration?: number | null;
  className?: string;
  onOver: any
}

function GameOver({ className, duration, onOver }: Props) {
  const [createRecord, { loading }] = useMutation(CreateResultDocument, {
    refetchQueries: [
      {query: ResultsDocument},
      'Results'
    ],
    awaitRefetchQueries: true
  });
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    username &&
      createRecord({
        variables: {
          data: {
            username,
            seconds: duration ?? 500,
          },
        },
        onCompleted: (data) => onOver('results', data?.createResult?.id),      });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 1, scale: 0 }}
      animate={{ scale: 1 }}
      className={`GameOver ${className}`}>
      <h1 className="GameOver_heading">
        {duration ? (
          <>
            <span>
              Final&nbsp;time:&nbsp;
              <TimeResult duration={duration} classNames="purple" />
            </span>
          </>
        ) : (
          "You found them all!"
        )}
      </h1>

      <form className="ResultForm">
        <input
          placeholder="Enter name to save your result"
          onChange={(e) => setUsername(e.target.value)}
        />
        <BlankButton
          className="GameOver__SubmitButton"
          disabled={username.length < 3 || loading}
          onClick={handleSubmit}
          content="Submit"
        />
      </form>
    </motion.div>
  );
}

export default GameOver;
