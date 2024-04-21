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

interface TableProps {
  headers: string[];
  data: [];
}

export function LeaderboardUI({ headers, data }: TableProps) {
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
        {data.map((info: any, index) => (
          <TableRow
            className="border-none dark:text-slate-200 text-slate-700 hover:bg-slate-800/10"
            key={info.user.id}
          >
            <TableCell className="font-medium">{++index}</TableCell>
            <TableCell className="font-medium">
              {info.user.first_name || info.user.email.split("@")[0]}
            </TableCell>
            <TableCell className="font-medium">{info.wpm}</TableCell>
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
