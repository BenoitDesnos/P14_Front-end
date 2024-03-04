import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "../ui/pagination";
import { Button } from "../ui/button";

const TablePagination = ({
  table,
  currentPage,
  numberOfPages,
}: {
  table: any;
  currentPage: number;
  numberOfPages: number;
}) => {
  const maxPages = 5;

  let pageArray = Array.from({ length: numberOfPages }, (_, index) => index);

  return (
    <div className="space-x-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
          </PaginationItem>
          {currentPage < maxPages && (
            <>
              {pageArray.slice(0, maxPages).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => table.setPageIndex(page)}
                    isActive={currentPage === page + 1}
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {maxPages < numberOfPages && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() =>
                        table.setPageIndex(table.getPageCount() - 1)
                      }
                      isActive={currentPage === table.getPageCount()}
                    >
                      {table.getPageCount()}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
            </>
          )}
          {currentPage >= maxPages &&
            currentPage < table.getPageCount() - 2 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => table.setPageIndex(0)}
                    isActive={currentPage === 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                {pageArray
                  .slice(currentPage - 2, currentPage + 1)
                  .map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => table.setPageIndex(page)}
                        isActive={currentPage === page + 1}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    isActive={currentPage === table.getPageCount()}
                  >
                    {table.getPageCount()}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
          {currentPage >= maxPages &&
            currentPage >= table.getPageCount() - 2 && (
              <>
                {" "}
                {currentPage !== maxPages && (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => table.setPageIndex(0)}
                        isActive={currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  </>
                )}
                {pageArray
                  .slice(table.getPageCount() - maxPages, table.getPageCount())
                  .map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => table.setPageIndex(page)}
                        isActive={currentPage === page + 1}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
              </>
            )}

          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TablePagination;
