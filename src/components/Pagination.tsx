import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const PaginationUI = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <Pagination className="flex text-xs flex-row items-end justify-start my-4 right-0">
      <PaginationContent className="text-xs flex flex-row items-end">
        <PaginationItem>
          {pageNumber != 1 && (
            <PaginationLink
              className="hover:rounded-none hover:dark:bg-gray-900 text-xs w-7 h-7"
              href={`/profile/scores?page=${pageNumber - 1}`}
            >
              {pageNumber - 1}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem className="text-xs">
          <PaginationLink
            className="dark:bg-yellow-500 rounded-none text-xs w-7 h-7"
            href={`/profile/scores?page=${pageNumber}`}
            isActive
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="hover:rounded-none hover:dark:bg-gray-900 text-xs w-7 h-7"
            href={`/profile/scores?page=${pageNumber + 1}`}
          >
            {pageNumber + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-xs w-7 h-7" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className="hover:bg-inherit text-xs w-7 h-7"
            href={`/profile/scores?page=${pageNumber + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationUI;
