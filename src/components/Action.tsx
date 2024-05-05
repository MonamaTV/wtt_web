import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ActionProps {
  mine: boolean;
  competitionID: string;
  handleDeleteComp: (competition_id: string) => void;
  handleRemove: (competition_id: string) => void;
}

const Action = ({
  mine,
  handleDeleteComp,
  competitionID,
  handleRemove,
}: ActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <BsThreeDotsVertical />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="shadow-sm dark:bg-yellow-500 bg-black  w-40 border-none rounded-none text-xs text-white">
        <DropdownMenuCheckboxItem className="rounded-none text-xs">
          <Link to={`/competition/${competitionID}`}>See details</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="rounded-none text-xs">
          <Link to={`/?competition=${competitionID}`}>Compete</Link>
        </DropdownMenuCheckboxItem>

        {mine && (
          <DropdownMenuCheckboxItem
            className="text-red-500 rounded-none text-xs"
            onClick={() => handleDeleteComp(competitionID)}
          >
            Delete
          </DropdownMenuCheckboxItem>
        )}
        {!mine && (
          <DropdownMenuCheckboxItem
            onClick={() => handleRemove(competitionID)}
            className="text-red-500 rounded-none text-xs"
          >
            Leave
          </DropdownMenuCheckboxItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Action;
