import GoBackButton from "components/blocks/goBackButton";

type UpdateStatusButtonProps = {
  handleShowForm: () => void;
};
const UpdateStatusButton = ({ handleShowForm }: UpdateStatusButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleShowForm}
      className="px-6 py-2 lg:py-3 rounded-lg flex flex-row items-center text-white bg-primary text-sm-15 xl:text-base"
    >
      Update status
    </button>
  );
};

type TopSectionProps = {
  handleShowForm: () => void;
};

const TopSection = ({ handleShowForm }: TopSectionProps) => {
  return (
    <div className="mt-4 mb-8 lg:mb-12 flex flex-row flex-wrap">
      <GoBackButton title="Work Order Name" />

      <div className="mt-8 lg:mt-8 xl:mt-0 flex-1 flex lg:justify-end">
        <UpdateStatusButton handleShowForm={handleShowForm} />
      </div>
    </div>
  );
};

export default TopSection;
