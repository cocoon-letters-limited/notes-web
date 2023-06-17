import React from "react";
import { ColumnInstance, Hooks } from "react-table";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate }: any, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef: any = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <input
        type="checkbox"
        className="w-4 h-4 lg:w-5 lg:h-5 text-primary bg-white rounded border border-[#B1BFD9] focus:ring-primary"
        ref={resolvedRef}
      />
    );
  },
);

const tableCheckbox = (hooks: Hooks) => {
  return hooks.visibleColumns.push((columns: ColumnInstance<{}>[]) => [
    // Let's make a column for selection
    {
      id: "selection",
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: () => (
        <div>
          <IndeterminateCheckbox />
        </div>
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: () => (
        <div>
          <IndeterminateCheckbox />
        </div>
      ),
    },
    ...columns,
  ]);
};

export default tableCheckbox;
