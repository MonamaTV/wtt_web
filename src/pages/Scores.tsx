import SelectScroll from "@/components/Select";
import { TableUI } from "@/components/Table";
import PaginationUI from "@/components/Pagination";
import { getUserScores } from "@/services/game.service";
import { games, options } from "@/services/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Scores = () => {
  const scoreHeaders = [
    "#",
    "Creator",
    "WPM",
    "Accuracy",
    "Played at",
    "Mode",
    "Completed",
  ];
  const [searchParams, _] = useSearchParams();

  const page = searchParams.get("page") || "1";
  const pageNumber = Number.isNaN(parseInt(page)) ? 1 : parseInt(page);

  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState(1);

  const { data: scores } = useQuery({
    queryKey: ["scores", limit, orderBy, pageNumber],
    queryFn: async () => {
      return await getUserScores(limit, orderBy, pageNumber);
    },
  });

  if (scores === undefined) return <h1>Loading...</h1>;

  return (
    <div className="border-b border-gray-900 flex flex-row px-5 min-h-screen">
      <div className="flex flex-col gap-y-3 w-full">
        <small className="text-xs">
          The list of scores also includes the ones from competitions.
        </small>
        <div className="flex flex-row gap-x-2 justify-between">
          <div className="gap-x-2 flex">
            <SelectScroll
              options={options}
              header={"Sort"}
              handleOnChange={(value) => setOrderBy(parseInt(value))}
            />
            <SelectScroll
              options={games}
              header={"Games"}
              handleOnChange={(value) => setLimit(parseInt(value))}
            />
          </div>
        </div>
        <div className="w-full">
          <TableUI headers={scoreHeaders} data={scores} />
          {/* <hr /> */}
          <PaginationUI pageNumber={pageNumber} />
        </div>
      </div>
    </div>
  );
};

export default Scores;
