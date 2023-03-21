import React, { useState } from "react";
import ThumbUpIcon from "components/svg/thumbUpIcon";
import ThumbDownIcon from "components/svg/thumbDownIcon";
import DropDown from "components/elements/dropdown";
import CreateNoteModal from "./components/createNoteModal";

type ListItemProps = {
  title: string;
};

const ListItem = ({ title }: ListItemProps) => {
  return (
    <button
      type="button"
      className="flex items-center text-sm-15 lg:text-sm hover:text-primary transition-all ease-in-out duration-200"
    >
      <span className="w-3 h-3 rounded bg-primary" />
      <span className="pl-3">{title}</span>
    </button>
  );
};

const Card = () => {
  return (
    <div className="bg-white px-4 pt-6 pb-8 rounded-lg overflow-hidden">
      <div className="mb-2">
        <p className="text-sm-15 lg:text-base font-bold">
          Service of machine - issued
        </p>
        <p className="text-xs lg:text-sm">Work issued.</p>
      </div>
      <hr />
      <div className="mt-2">
        <p className="text-xs lg:text-sm text-[#959595]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor et
          justo, lectus rhoncus at lorem.
        </p>

        <div className="mt-4 flex flex-row items-center space-x-4">
          <button type="button" className="flex items-center">
            <span>
              <ThumbUpIcon />
            </span>
            <span className="pl-2">0</span>
          </button>
          <button type="button" className="flex items-center">
            <span>
              <ThumbDownIcon />
            </span>
            <span className="pl-2">0</span>
          </button>
        </div>

        <p className="mt-4 italic text-xs lg:text-xs text-[#3F3F3F]">
          Last updated 4 months ago
        </p>

        <div className="mt-4 flex">
          <p className="text-primary bg-[#D0E0FF] px-3 py-2 rounded font-bold text-xs lg:text-sm">
            Work issued.
          </p>
        </div>
      </div>
    </div>
  );
};

const CategoriesListSection = () => {
  return (
    <div className="hidden lg:block w-full md:w-4/12 bg-white h-full rounded-lg">
      <div className="w-full bg-primary py-4 px-6 rounded-t-lg">
        <p className="text-lg lg:text-xl font-bold text-white">Categories</p>
      </div>
      <div className="bg-white px-6 pt-6 pb-12 flex flex-col space-y-4">
        <ListItem title="Personal Development Note" />
        <ListItem title="Engineering Note" />
        <ListItem title="Private Note" />
        <ListItem title="Public Note" />
        <ListItem title="Doctors Note" />
        <ListItem title="Lesson Note" />
        <ListItem title="Handover Note" />
        <ListItem title="Maintenance Note" />
      </div>
    </div>
  );
};

const NoteListSection = () => {
  return (
    <div className="flex-1 md:pl-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const NoteSection = () => {
  const options = ["All", "Maintenance", "Assets", "Finance"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClickOption = (value: string) => {
    setSelectedOption(value);
  };

  const [showNewDropdownOption, setShowNewDropdownOption] = useState(false);

  const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);

  return (
    <>
      <div className="relative lg:-mt-12">
        <div className="flex justify-end">
          <div className="px-4 py-3 border border-[#B1BFD9] rounded-lg text-base lg:text-lg text-[#051738]">
            <DropDown
              selected={selectedOption}
              options={options}
              onClick={handleClickOption}
              selectedWidth="w-28 text-left"
            />
          </div>
          <div className="ml-3 relative">
            <button
              type="button"
              onClick={() => setShowNewDropdownOption(!showNewDropdownOption)}
              className="py-3 px-6 rounded-lg bg-primary text-white text-base lg:text-lg"
            >
              New
            </button>

            {showNewDropdownOption && (
              <div
                onMouseLeave={() => setShowNewDropdownOption(false)}
                className="absolute bg-white rounded-lg w-40 right-0 top-16 px-3 py-4 font-bold text-sm-15 lg:text-base"
                style={{
                  boxShadow: "0px 4px 10px rgba(124, 124, 124, 0.25)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowCreateNoteModal(true)}
                >
                  <span>New note</span>
                </button>
                <button type="button" className="pt-1">
                  <span>New category</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-row flex-wrap">
          <CategoriesListSection />
          <NoteListSection />
        </div>
      </div>

      {/* Create Note Modal */}
      <CreateNoteModal
        open={showCreateNoteModal}
        handleClose={() => setShowCreateNoteModal(false)}
      />
    </>
  );
};

export default NoteSection;
