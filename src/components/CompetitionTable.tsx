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

export function CompetitionTable({ headers, data }: TableProps) {
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
        {data.map((info: any) => (
          <TableRow
            className="border-none dark:text-slate-200 text-slate-700 hover:bg-slate-800/10"
            key={info.user.id}
          >
            <TableCell className="font-medium">
              {info.user.first_name || info.user.email.split("@")[0]}
            </TableCell>
            <TableCell className="font-medium">
              {Math.floor(info.score?.wpm)}
            </TableCell>
            <TableCell className="font-medium">
              {Math.round(info.score?.accuracy)}%
            </TableCell>
            <TableCell className="font-medium">
              {timeFormat(info.score?.played_at || "N/A")}
            </TableCell>
            <TableCell className="font-medium">No</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
