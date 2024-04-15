import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";

const Action = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <BsThreeDotsVertical />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-none rounded-none">
        <DropdownMenuCheckboxItem>See more</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Delete</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="text-red-500">
          Leave
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Action;
