import { FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import HearderSafety from "../component/HearderSafety";

export function CardContent({
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
      <div className="bg-white p-5 space-y-5 rounded-lg">
        <HearderSafety />
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
          title="Details of any manual or back up systems to be established and used during isolation period"
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
      </div>
      <p className="my-3 rounded-lg font-semibold">AUTHORISATION</p>
      <div className="bg-white p-2 rounded-lg">
        <FormControlLabel
          value="Nelson Iheagwan"
          control={<Checkbox />}
          label="Nelson Iheagwan"
          labelPlacement="start"
        />
      </div>
      <p className="my-3 rounded-lg font-semibold">SANCTION TO TEST </p>
      <div className="bg-white p-4 rounded-lg">
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
      <p className="my-3 rounded-lg font-semibold">
        SAFETY SYSTEM DE-ISOLATION{" "}
      </p>
      <div className="bg-white p-4 rounded-lg">
        <CardContent
          styeClass="col-span-1 my-3"
          title="Permission is granted to"
          detail="Abe Abimbola"
        />
        <FormControlLabel
          value="Nelson Iheagwan"
          control={<Checkbox />}
          label="Nelson Iheagwan"
          labelPlacement="start"
        />
      </div>
    </div>
  );
}

export default DetailSefety;
