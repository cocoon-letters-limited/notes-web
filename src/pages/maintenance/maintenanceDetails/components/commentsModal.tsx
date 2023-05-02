import MainModal from "components/modals/mainModal";
import React from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const CommentsModal = ({ open, handleClose }: Props) => {
  return (
    <MainModal
      title="Work issued comment"
      open={open}
      handleClose={handleClose}
    >
      <div className="mb-6">
        <p className="mt-4 italic text-sm">Last updated 4 months ago</p>

        <div className="mt-4 lg:-mt-1 flex justify-end">
          <p className="font-semibold text-sm-15 rounded-md py-3 px-6 bg-[#25BB00] text-white">
            Issued
          </p>
        </div>

        <p className="mt-4 mb-6 text-sm-15 lg:text-base text-default lg:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit
          proin augue arcu. Sagittis ultrices vitae dis pulvinar sit enim.
          Egestas gravida lacinia turpis netus turpis ut. Sed ornare quis
          facilisi habitant viverra egestas nisl, pretium. Viverra laoreet ipsum
          cras sodales faucibus eget tellus massa tempus. Vitae risus, congue
          sociis risus, ut eu. Vel augue id at eget. Amet cursus adipiscing et
          massa, ultricies pulvinar. Elementum mauris libero enim, vulputate.
          Proin non lorem neque faucibus felis, rhoncus imperdiet et, aliquam.
          Condimentum ac urna nam ac mi, porta amet. Duis justo dui duis amet
          luctus mattis. Ullamcorper nunc mauris auctor n
        </p>

        <a
          className="text-primary italic underline"
          href="https://noteeam.com/work"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://noteeam.com/work
        </a>
      </div>
    </MainModal>
  );
};

export default CommentsModal;
