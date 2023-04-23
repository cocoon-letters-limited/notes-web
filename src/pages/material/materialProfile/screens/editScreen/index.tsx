import React, { useState } from "react";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";
import EditTab from "./components/editTab";
import QuantitiesForm from "./components/quantitiesForm";
import CostsForm from "./components/costsForm";
import PastUsageForm from "./components/pastUsageForm";
import SupplierForm from "./components/supplierForm";
import PolicyForm from "./components/policyForm";

const EditScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Quantities");

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const renderFormScreenBasedOnSelectedTab = (selectedValue: string) => {
    switch (selectedValue) {
      case "Quantities":
        return <QuantitiesForm />;

      case "Costs":
        return <CostsForm />;

      case "Policy":
        return <PolicyForm />;

      case "Past Usage":
        return <PastUsageForm />;

      case "Supplier":
        return <SupplierForm />;

      default:
        return null;
    }
  };
  return (
    <div className="relative mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <InputGroup type="text" label="cahs" placeholder="" />
        <SelectGroup
          label="Shelf code"
          placeholder=""
          options={[
            {
              label: "1234A",
              value: "1234A",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <InputGroup type="text" label="Stock summary" placeholder="" />
        <SelectGroup
          label="Charge code"
          placeholder=""
          options={[
            {
              label: "1234A",
              value: "1234A",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <InputGroup type="text" label="Store number" placeholder="" />
        <SelectGroup
          label="Code code"
          placeholder=""
          options={[
            {
              label: "1234A",
              value: "1234A",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <InputGroup type="text" label="Store summary" placeholder="" />
        <SelectGroup
          label="Code code"
          placeholder=""
          options={[
            {
              label: "1234A",
              value: "1234A",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <InputGroup type="text" label="Store summary" placeholder="" />
        <SelectGroup
          label="Code code"
          placeholder=""
          options={[
            {
              label: "1234A",
              value: "1234A",
            },
          ]}
        />
      </div>

      <EditTab selectedTab={selectedTab} handleChangeTab={handleChangeTab} />
      <div className="mt-6">
        {renderFormScreenBasedOnSelectedTab(selectedTab)}
      </div>
    </div>
  );
};

export default EditScreen;
