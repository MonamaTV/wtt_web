import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeFormat } from "@/lib/time";
import { CompetitionData } from "@/lib/types";
import { Link } from "react-router-dom";

interface TableProps {
  headers: string[];
  data: CompetitionData[];
}

export function CompetitionTable({ headers, data }: TableProps) {
  let newData = data.sort((scoreA, scoreB): any => {
    const score1 = scoreA.score !== null ? scoreA.score.accuracy : Infinity;
    const score2 = scoreB.score !== null ? scoreB.score.accuracy : Infinity;

    return score1 > score2 ? 1 : -1;
  });

  return (
    <Table className="my-10">
      <TableHeader>
        <TableRow className="border-none hover:bg-inherit">
          {headers.map((val, index) => (
            <TableHead key={index} className="w-[100px]">
              {val}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {newData.map((info: CompetitionData, index: number) => (
          <TableRow
            className="border-none dark:text-slate-200 text-slate-700 hover:bg-slate-800/10"
            key={info.user.email}
          >
            <TableCell className="font-medium">{++index}</TableCell>
            <TableCell className="font-medium">
              <Link
                className="underline"
                to={`/users/${info.user.id}`}
              >
                {info.user.first_name || info.user.email.split("@")[0]}
              </Link>
            </TableCell>
            <TableCell className="font-medium">
              {info.score?.wpm ? Math.floor(info.score?.wpm) : "N/A"}
            </TableCell>
            <TableCell className="font-medium">
              {info.score?.accuracy
                ? Math.floor(info.score?.accuracy) + "%"
                : "N/A"}
            </TableCell>
            <TableCell className="font-medium">
              {info.score?.characters || "N/A"}
            </TableCell>
            <TableCell className="font-medium">
              {info.score?.played_at
                ? timeFormat(info.score?.played_at)
                : "N/A"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
