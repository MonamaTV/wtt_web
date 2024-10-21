import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Competitors } from "@/lib/types";
import { Link } from "react-router-dom";

interface TableProps {
  headers: string[];
  data: Competitors[];
}

const CompetitorList = ({ headers, data: newData }: TableProps) => {
  return (
    <Table>
      <TableCaption>Competitors</TableCaption>
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
            key={info.id}
          >
            <TableCell className="font-medium">{++index}</TableCell>
            <TableCell className="font-medium">
              <Link
                className="underline"
                to={`/users/${info.id}`}
              >
                {info.first_name || "N/A"}
              </Link>
            </TableCell>
            <TableCell className="font-medium">
              <Link
                className="underline"
                to={`/users/${info.id}`}
              >
                {info.last_name || "N/A"}
              </Link>
            </TableCell>

            <TableCell className="font-medium">
              <Link
                className="underline"
                to={`/users/${info.id}`}
              >
                {info.email.split("@")[0] || "N/A"}
              </Link>
            </TableCell>
            <TableCell className="font-medium">
              {info.bio !== null ? info.bio.slice(0, 20) + "..." : "N/A"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CompetitorList;
