import TextareaGroup from "components/elements/textarea";
import { useState } from "react";
import HearderSafety from "../component/HearderSafety";
import SafetyFooter from "../component/SafetyFooter";
import Title from "../component/title";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomRadio: React.FC<RadioProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
}: any) => {
  const [value, setValue] = useState(selectedValue);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <form action="" className="flex justify-between">
      <p>{label}</p>
      <div className="flex space-x-4">
        {options.map((option: { value: any; label: string }) => (
          <label
            htmlFor={option.value}
            key={option.value}
            className="inline-flex items-center mt-1 mb-1"
          >
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleValueChange}
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </form>
  );
};

function ConfinedCertificate() {
  return (
    <div>
      <Title title="Confined Space Entry Certificate" />
      <div className="bg-white p-5 space-y-5 rounded-lg">
        <HearderSafety />
        <span>Linked to:</span>
        <span className="text-blue-700">Permit Document</span>
        <TextareaGroup label="Purpose" />
        <div className="grid gap-3 mb-6 md:grid-cols-2 mt-2">
          <div className="space-y-3">
            <p className="font-semibold">PRE ENTRY CHECKS</p>
            <CustomRadio
              label="Remotely Controlled Equipment"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Fire blanket screen"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Adjacent space drained of hydrocarbons"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Adjacent spaces filled with ballast"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Space continuously vented"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Work party monitor continuously"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
          </div>
          <div className="space-y-3 px-5">
            <p className="font-semibold ">SPECIAL EQUIPMENT AND PRECAUTIONS</p>
            <CustomRadio
              label="Two man standby crew"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Other standby crew"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Lifelines and harness"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Lifelines and harness"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="IS torches/flash lights"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="First aid kit"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Stretcher"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Resuscitator"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="BA self contained"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Air tools"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Water hose"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
            <CustomRadio
              label="Oxygen monitor"
              options={[
                { label: "yes", value: "no" },
                { label: "No", value: "No" },
              ]}
              name="options"
              selectedValue="yes"
              onChange={() => {}}
            />
          </div>
        </div>
        <SafetyFooter />
      </div>
    </div>
  );
}

export default ConfinedCertificate;
