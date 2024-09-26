import { postScore } from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface ResultsProps {
  score: {
    test: string;
    typed: string;
    duration: number;
    completed: boolean;
    errors: number;
  };
  competition: string | null;
}

const Results = ({ score, competition }: ResultsProps) => {
  const wpm = score.typed.length / 5 / (score.duration / 60);
  const correct = score.typed.length - score.errors;
  const accuracy = Math.round((correct / score.typed.length) * 100);
  const netSpeed = Math.round(
    (score.typed.length / 5 - score.errors) / (score.duration / 60)
  );

  const { isError, error } = useQuery({
    queryKey: ["scores", score],
    queryFn: async () => {
      return await postScore(
        {
          completed: score.completed,
          duration: score.duration,
          characters: score.typed.length,
          words: score.test.length,
          errors: score.errors,
        },
        competition
      );
    },
  });

  if (isError) {
    toast.error(error.message);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <small className="text-gray-500">WPM</small>
        <p className="font-semibold text-xl">{wpm} </p>
      </div>
      <div>
        <small className="text-gray-500">Accuracy</small>
        <p className="font-semibold text-xl">{accuracy}%</p>
      </div>
      <div>
        <small className="text-gray-500">Correct/Incorrect</small>
        <p className="font-semibold text-xl">
          {correct}/{score.errors}{" "}
        </p>
      </div>
      <div>
        <small className="text-gray-500">Net Speed</small>
        <p className="font-semibold text-xl">{netSpeed}</p>
      </div>
      <div>
        <small className="text-gray-500">Total Characters Typed</small>
        <p className="font-semibold text-xl">{score.typed.length}</p>
      </div>
      <div className="my-5">
        <Link
          to={"/leaderboard"}
          className="border bg-black text-yellow-500  outline-none text-xs px-3 py-2 block text-center"
        >
          Check leaderboard
        </Link>
      </div>
    </div>
  );
};

export default Results;
