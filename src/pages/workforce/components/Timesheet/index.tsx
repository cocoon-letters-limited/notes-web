// eslint-disable-next-line import/no-extraneous-dependencies
import Calendar from "react-calendar";

import "./style.module.css";
import { useState } from "react";

function Timesheet() {
  const [value] = useState(new Date());
  return (
    <div>
      <Calendar value={value} />
    </div>
  );
}

export default Timesheet;
