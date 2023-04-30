import { FormControlLabel, Checkbox } from "@mui/material";
import React from "react";

function CardContent({
  title,
  detail,
  styeClass,
}: {
  title: string;
  detail: string;
  styeClass: string;
}) {
  return (
    <div className={styeClass}>
      <p className="text-sm text-[#96A1B4] ">{title}</p>
      <p>{detail}</p>
    </div>
  );
}
function DetailSefety() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-3">
        <CardContent
          styeClass="col-span-4"
          title="Worksite Location"
          detail="4140 Parker Rd. Allentown, New Mexico 31134"
        />
        <CardContent
          styeClass="col-span-1 "
          title="Worksite Location"
          detail="4140 Parker Rd. Allentown, New Mexico 31134"
        />
        <CardContent
          styeClass="col-span-4"
          title="Worksite Location"
          detail="4140 Parker Rd. Allentown, New Mexico 31134"
        />
        <CardContent
          styeClass="col-span-1 "
          title="Worksite Location"
          detail="4140 Parker Rd. Allentown, New Mexico 31134"
        />
      </div>
      <CardContent
        styeClass="col-span-1 "
        title="Description"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu commodo varius nullam tellus mattis magna. Senectus habitant urna pretium nec consectetur. Eget bibendum nec tellus, dui nec vitae. Aliquam viverra tincidunt neque blandit sed vestibulum nibh. Iaculis commodo quis elementum amet mattis aliquam tristique purus leo."
      />
      <div className="grid grid-cols-6 gap-3 mt-3">
        <CardContent
          styeClass="col-span-4"
          title="Worksite Location"
          detail="4140 Parker Rd. Allentown, New Mexico 31134"
        />
        <CardContent
          styeClass="col-span-1 "
          title="Worksite Location"
          detail="4140 Parker Rd. Allentown, New Mexico 31134"
        />
      </div>
      <CardContent
        styeClass="col-span-1 my-3"
        title="Description"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu commodo varius nullam tellus mattis magna. Senectus habitant urna pretium nec consectetur. Eget bibendum nec tellus, dui nec vitae. Aliquam viverra tincidunt neque blandit sed vestibulum nibh. Iaculis commodo quis elementum amet mattis aliquam tristique purus leo."
      />
      <CardContent
        styeClass="col-span-1 "
        title="Description"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu commodo varius nullam tellus mattis magna. Senectus habitant urna pretium nec consectetur. Eget bibendum nec tellus, dui nec vitae. Aliquam viverra tincidunt neque blandit sed vestibulum nibh. Iaculis commodo quis elementum amet mattis aliquam tristique purus leo."
      />
      <FormControlLabel
        value="Iheagwan"
        control={<Checkbox />}
        label="I, Area Authority, agree with the information provided"
        labelPlacement="start"
      />
      <p className="mt-3">AUTHORISATION</p>
      <FormControlLabel
        value="Nelson Iheagwan"
        control={<Checkbox />}
        label="Nelson Iheagwan"
        labelPlacement="start"
      />
      <p className="mt-3">SANCTION TO TEST </p>
      <CardContent
        styeClass="col-span-1 my-3"
        title="Permission is granted to test subject to the following precautions"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu commodo varius nullam tellus mattis magna. Senectus habitant urna pretium nec consectetur. Eget bibendum nec tellus, dui nec vitae. Aliquam viverra tincidunt neque blandit sed vestibulum nibh. Iaculis commodo quis elementum amet mattis aliquam tristique purus leo."
      />
      <FormControlLabel
        value="Nelson Iheagwan"
        control={<Checkbox />}
        label="Nelson Iheagwan"
        labelPlacement="start"
      />
    </div>
  );
}

export default DetailSefety;
