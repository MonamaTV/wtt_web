import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeFormat } from "@/lib/time";
import { Leaderboard } from "@/lib/types";
import { Link } from "react-router-dom";

interface TableProps {
  headers: string[];
  data: Leaderboard[];
}

export function LeaderboardUI({ headers, data }: TableProps) {
  let newData = data.sort((leaderA, leaderB): any => {
    return leaderA.accuracy < leaderB.accuracy ? 1 : -1;
  });
  return (
    <Table>
      <TableCaption>Current leaders...</TableCaption>
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
        {newData.map((info: any, index) => (
          <TableRow
            className="border-none dark:text-slate-200 text-slate-700 hover:bg-slate-800/10"
            key={info.user.id}
          >
            <TableCell className="font-medium">{++index}</TableCell>
            <TableCell className="font-medium">
              <Link className="underline" to={`/users/${info.user.id}`}>{info.user.first_name || info.user.email.split("@")[0]}</Link>
            </TableCell>
            <TableCell className="font-medium">
              {Math.floor(info.wpm)}
            </TableCell>
            <TableCell className="font-medium">
              {Math.round(info.accuracy)}%
            </TableCell>
            <TableCell className="font-medium">
              {timeFormat(info.score.played_at)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
