import React from "react";

const InvoiceSection = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left text-black">
        <thead className="text-sm text-[#9AA6BB] bg-white">
          <tr>
            <th scope="col" className="px-6 py-4 font-semibold">
              S/N
            </th>
            <th scope="col" className="px-6 py-4 font-semibold">
              Purchase Order Title
            </th>
            <th scope="col" className="px-6 py-4 font-semibold">
              Purchase Order Number
            </th>
            <th scope="col" className="px-6 py-4 font-semibold">
              Completion Certificate Number
            </th>
            <th scope="col" className="px-6 py-4 font-semibold">
              Due Date
            </th>
            <th scope="col" className="px-6 py-4 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#F3F7FF]">
            <th scope="row" className="px-6 py-4 font-medium">
              1.
            </th>
            <td className="px-6 py-4 whitespace-nowrap">Forklift Drive</td>
            <td className="px-6 py-4">FK249498</td>
            <td className="px-6 py-4">CMPc5893jh</td>
            <td className="px-6 py-4">08. 06. 2022</td>
            <td className="px-6 py-4">
              <p className="font-medium text-[#00B912]">Paid</p>
            </td>
          </tr>
          <tr className="bg-white">
            <th scope="row" className="px-6 py-4 font-medium">
              2.
            </th>
            <td className="px-6 py-4 whitespace-nowrap">Forklift Drive</td>
            <td className="px-6 py-4">FK249498</td>
            <td className="px-6 py-4">CMPc5893jh</td>
            <td className="px-6 py-4">08. 06. 2022</td>
            <td className="px-6 py-4">
              <p className="font-medium text-[#00B912]">Paid</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceSection;
