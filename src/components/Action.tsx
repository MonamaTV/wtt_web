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
      <DropdownMenuContent className="w-56 border-none rounded-none text-xs bg-yellow-500 text-white">
        <DropdownMenuCheckboxItem>See details</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link to={`/?competition=${competitionID}`}>Compete</Link>
        </DropdownMenuCheckboxItem>

        {mine && (
          <DropdownMenuCheckboxItem
            className="text-red-500"
            onClick={() => handleDeleteComp(competitionID)}
          >
            Delete
          </DropdownMenuCheckboxItem>
        )}
        {!mine && (
          <DropdownMenuCheckboxItem
            onClick={() => handleRemove(competitionID)}
            className="text-red-500"
          >
            Leave
          </DropdownMenuCheckboxItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Action;
