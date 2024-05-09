import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const PaginationUI = () => {
  return (
    <Pagination className="flex text-xs flex-row items-end justify-start my-4 right-0">
      <PaginationContent className="text-xs flex flex-row items-end">
        <PaginationItem>
          <PaginationLink
            className="hover:rounded-none hover:dark:bg-gray-900 text-xs w-7 h-7"
            href="#"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="text-xs">
          <PaginationLink
            className="dark:bg-yellow-500 rounded-none text-xs w-7 h-7"
            href="#"
            isActive
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="hover:rounded-none hover:dark:bg-gray-900 text-xs w-7 h-7"
            href="#"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-xs w-7 h-7" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className="hover:bg-inherit text-xs w-7 h-7"
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationUI;
