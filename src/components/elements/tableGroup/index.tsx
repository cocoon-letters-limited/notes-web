/* eslint-disable import/no-extraneous-dependencies */
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
import { useEffect } from "react";
import Pagination from "../pagination";
import style from "./style.module.css";

type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

type Props = {
  showPagination?: boolean;
  columns: Column<any>[];
  data: any[];
};

const TableGroup = ({ showPagination, columns, data }: Props) => {
  const tableInstance = useTable(
    { columns, data },
    usePagination,
    useRowSelect,
  ) as TableInstanceWithHooks<any>;

  const {
    getTableProps,
    getTableBodyProps,
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
  } = tableInstance;

  const { pageIndex } = state;
  const paginationRange = useCustomPagination({
    totalPageCount: pageCount,
    currentPage: pageIndex,
  });

  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full w-full border-separate border-spacing-y-4"
        >
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className={`bg-primary ${style.tableHeadRow}`}
                >
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps()}
                        className={`text-white text-sm font-semibold px-6 py-4 lg:py-5 text-left ${style.th}`}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()} className="relative">
            {
              // Loop over the table rows
              page.map((row: any) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()} className={`bg-white ${style.tr}`}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell: any) => {
                        // Apply the cell props
                        return (
                          <td
                            {...cell.getCellProps()}
                            className={`px-6 py-6 text-sm lg:text-sm-15 whitespace-nowrap ${style.td}`}
                          >
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
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
      </div>
    </div>
  );
};

export default TableGroup;
