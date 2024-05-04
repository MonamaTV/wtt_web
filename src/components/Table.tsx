import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useLogin from "./hooks/useAuth";
import { timeFormat } from "@/lib/time";

interface TableProps {
  headers: string[];
  data: [];
}

export function TableUI({ headers, data }: TableProps) {
  const { decodedToken } = useLogin();

  return (
    <Table className="text-sm">
      <TableCaption>A list of your recent scores.</TableCaption>
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
        {data.map((score: any, index) => (
          <TableRow
            className="border-none dark:text-slate-200 text-slate-700 hover:bg-slate-800/10"
            key={score.id}
          >
            <TableCell className="font-medium">{++index}</TableCell>
            <TableCell className="font-medium">
              {score?.user.id === decodedToken().user_id
                ? "Me"
                : score?.user.email}
            </TableCell>
            <TableCell className="font-medium">{score.wpm}</TableCell>
            <TableCell className="font-medium">{score.accuracy}%</TableCell>
            <TableCell className="font-medium">
              {timeFormat(score.played_at)}
            </TableCell>
            <TableCell className="font-medium">{score.duration}</TableCell>
            <TableCell className="font-medium">
              {score.completed ? "Yes" : "No"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
