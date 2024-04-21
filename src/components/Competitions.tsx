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
import Action from "./Action";
import { timeFormat } from "@/lib/time";

interface TableProps {
  headers: string[];
  data: [];
  handleDeleteCompetition: (id: string) => void;
  handleRemoveUserFromCompetition: (id: string) => void;
}

export function CompetitionsTableUI({
  headers,
  data,
  handleDeleteCompetition,
  handleRemoveUserFromCompetition,
}: TableProps) {
  const { decodedToken } = useLogin();

  const userID = decodedToken()?.user_id;

  return (
    <Table>
      <TableCaption>A list of your recent competitions.</TableCaption>
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
        {data.map((competition: any, index) => (
          <TableRow
            className="border-none dark:text-slate-200 text-slate-700 hover:bg-slate-800/10"
            key={competition.id}
          >
            <TableCell className="font-medium">{++index}</TableCell>
            <TableCell className="font-medium">
              {competition?.user.id === decodedToken().user_id
                ? "Me"
                : competition?.user.email.split("@")[0]}
            </TableCell>
            <TableCell className="font-medium">
              {timeFormat(competition.created_at)}
            </TableCell>
            <TableCell className="font-medium">
              {timeFormat(competition.expires_in)}
            </TableCell>
            <TableCell className="font-medium">Tadima</TableCell>
            <TableCell className="font-medium">
              <Action
                mine={userID === competition.creator_id}
                competitionID={competition.id}
                handleDeleteComp={handleDeleteCompetition}
                handleRemove={handleRemoveUserFromCompetition}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
