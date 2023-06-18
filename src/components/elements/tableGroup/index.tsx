import {
  Column,
  useTable,
  usePagination,
  useRowSelect,
  TableInstance,
  UsePaginationInstanceProps,
  UseSortByInstanceProps,
  UsePaginationState,
} from "react-table";
import { useCustomPagination } from "hooks/useCustomPagination";
import { useEffect, useState } from "react";
import Pagination from "../pagination";
import style from "./style.module.css";
import tableCheckbox from "./tableCheckbox";
import TableColumnFilterModal from "./tableColumnFilterModal";
// git push
type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

type Props = {
  showPagination?: boolean;
  columns: Column<any>[];
  data: any[];
  hasCheckboxColumn?: boolean;
};

const TableGroup = ({
  showPagination,
  columns,
  data,
  hasCheckboxColumn = true,
}: Props) => {
  const tableInstance = useTable(
    { columns, data },
    usePagination,
    useRowSelect,
    (hooks) => {
      if (hasCheckboxColumn) {
        tableCheckbox(hooks);
      }
    },
  ) as TableInstanceWithHooks<any>;

  const {
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    pageOptions,
    previousPage,
    setPageSize,
    state,
    allColumns,
  } = tableInstance;

  const { pageIndex } = state;
  const paginationRange = useCustomPagination({
    totalPageCount: pageCount,
    currentPage: pageIndex,
  });

  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  //   Table Column Filter state management
  const [showColumnFilterModal, setShowColumnFilterModal] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-x-auto">
        <table className="min-w-full w-full border-separate border-spacing-y-4">
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr className={`bg-primary ${style.tableHeadRow}`}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th
                        className={`text-white text-sm font-semibold px-6 py-4 lg:py-5 text-left ${style.th}`}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                  {/* Table column filter button */}
                  <th
                    className={`text-white text-sm font-semibold pl-1 pr-4 py-4 lg:py-5 text-left ${style.th}`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setShowColumnFilterModal(!showColumnFilterModal)
                      }
                      className="focus:outline-none pt-1"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody className="relative">
            {
              // Loop over the table rows
              page.map((row: any) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr className={`bg-white ${style.tr}`}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell: any) => {
                        // Apply the cell props
                        return (
                          <td
                            className={`px-6 py-6 text-sm lg:text-sm-15 whitespace-nowrap ${style.td}`}
                          >
                            {
                              // Render the cell contents g
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                    <td
                      className={`pl-1 pr-4 py-6 text-sm lg:text-sm-15 whitespace-nowrap ${style.td}`}
                    />
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      <div className="">
        {showPagination && (
          <Pagination
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            previousPage={previousPage}
            nextPage={nextPage}
            paginationRange={paginationRange}
            pageIndex={pageIndex}
            gotoPage={gotoPage}
            pageOptions={pageOptions}
          />
        )}
      </div>

      {/* Table Column Filter Modal */}
      {showColumnFilterModal && (
        <TableColumnFilterModal
          columns={allColumns}
          onClose={() => setShowColumnFilterModal(false)}
        />
      )}
    </div>
  );
};

export default TableGroup;
