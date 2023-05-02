import React, { ReactNode } from "react";

function IntegrityCard({
  childElement,
  title,
  detail,
  iconColor,
}: {
  childElement: ReactNode;
  title: string;
  detail: string;
  iconColor: string;
}) {
  return (
    <div className="shadow rounded-lg mt-3 p-5">
      <button
        type="button"
        className={`rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-${
          iconColor || "red"
        }-700 bg-${iconColor}`}
      >
        {childElement}
      </button>
      <span className="m-2 text-gray-400 text-xs">{title}</span>
      <p className={`text-${iconColor}   mt-2`}>{detail}</p>
    </div>
  );
}

export default IntegrityCard;
