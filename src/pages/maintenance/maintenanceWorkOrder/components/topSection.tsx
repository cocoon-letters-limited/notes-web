import GoBackButton from "components/blocks/goBackButton";

const TopSection = () => {
  return (
    <div className="mt-4 mb-6 flex flex-row flex-wrap">
      <div className="w-full lg:w-9/12 flex flex-row items-center flex-wrap">
        <GoBackButton title="Work Order" />
      </div>
    </div>
  );
};

export default TopSection;
