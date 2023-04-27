import { DOTS } from "hooks/useCustomPagination";
import React, { ReactElement } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  pageNumber: string | number | ReactElement;
  disabled?: boolean;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  pageNumber,
  disabled,
  isActive,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`text-sm lg:text-base px-3 py-1 rounded-full font-semibold ${
        isActive ? "text-white bg-primary" : "bg-white text-primary"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {pageNumber}
    </button>
  );
};

type PaginationProps = {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: any;
  pageIndex: number;
  gotoPage: any;
  nextPage: any;
  previousPage: any;
  paginationRange: any;
};

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageIndex,
  gotoPage,
  nextPage,
  previousPage,
  paginationRange,
}: PaginationProps) => {
  return (
    <div className="py-3 flex flex-col-reverse md:flex-row items-center text-center justify-center pt-10">
      <div className="mt-8 md:mt-0">
        <p className="text-[#B5B7C0] text-sm lg:text-sm-15">
          Showing data {pageIndex + 1} of {pageOptions.length}
        </p>
      </div>

      <div
        className="flex-1 flex items-center justify-end"
        aria-label="Pagination"
      >
        <div
          className="relative z-0 inline-flex items-center space-x-3 xl:space-x-4"
          aria-label="Pagination"
        >
          {canPreviousPage && (
            <Button
              onClick={() => previousPage()}
              isActive={false}
              disabled={!canPreviousPage}
              pageNumber={
                <p className="h-5 lg:h-6 flex items-center justify-center">
                  <svg
                    className="w-2 lg:w-3 h-2 lg:h-3"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.93576 5.83804L0.175756 3.11404L2.93576 0.390045H4.66376L1.89176 3.11404L4.66376 5.83804H2.93576Z"
                      fill="#054CD6"
                    />
                  </svg>
                </p>
              }
            />
          )}

          {paginationRange?.map((pageNumber: any) => {
            if (pageNumber === DOTS) {
              return (
                <div
                  key={pageNumber}
                  className="text-sm lg:text-base h-6 lg:h-9 px-3 py-1 bg-white text-primary rounded-full flex justify-center items-center"
                >
                  <svg
                    width="17"
                    height="5"
                    viewBox="0 0 17 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.7943 0.5V4.14H0.154297V0.5H3.7943Z"
                      fill="#054CD6"
                    />
                    <path
                      d="M10.3197 0.5V4.14H6.67969V0.5H10.3197Z"
                      fill="#054CD6"
                    />
                    <path
                      d="M16.8451 0.5V4.14H13.2051V0.5H16.8451Z"
                      fill="#054CD6"
                    />
                  </svg>
                </div>
              );
            }

            if (pageNumber - 1 === pageIndex) {
              return (
                <Button
                  key={pageNumber}
                  pageNumber={pageNumber}
                  onClick={() => gotoPage(pageNumber - 1)}
                  isActive
                />
              );
            }

            return (
              <Button
                key={pageNumber}
                pageNumber={pageNumber}
                onClick={() => gotoPage(pageNumber - 1)}
                isActive={false}
              />
            );
          })}
          <Button
            onClick={() => nextPage()}
            isActive={false}
            disabled={!canNextPage}
            pageNumber={
              <p className="h-5 lg:h-6 flex items-center justify-center">
                <svg
                  className="w-2 lg:w-3 h-2 lg:h-3"
                  viewBox="0 0 5 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.343756 0.390045H2.07176L4.83176 3.11404L2.07176 5.83804H0.343756L3.11576 3.11404L0.343756 0.390045Z"
                    fill="#054CD6"
                  />
                </svg>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
