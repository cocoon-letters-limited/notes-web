import React, { useState } from "react";
import CommentsModal from "./commentsModal";

type CardProps = {
  title: string;
  statusText?: string;
  statusTextColor?: string;
  statusBgColor?: string;
  onClick: () => void;
};

const Card = ({
  title,
  statusText,
  statusTextColor,
  statusBgColor,
  onClick,
}: CardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus:outline-none text-left bg-white rounded-lg px-4 lg:px-6 pt-6 pb-8 rounded-lg"
    >
      <p className="text-sm-15">{title}</p>

      <hr className="border-[0.2px] border-[#D1D1D1]m my-4" />

      <div className="">
        <p className="text-[#959595] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor et
          justo, lectus rhoncus at lorem.
        </p>

        <p className="mt-4 italic text-sm">Last updated 4 months ago</p>
      </div>
      <div className="mt-4 flex">
        <p
          className={`font-semibold text-sm-15 rounded-md py-3 px-6 ${statusBgColor} ${statusTextColor}`}
        >
          {statusText || "Requested"}
        </p>
      </div>
    </button>
  );
};

const CommentsSection = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleShowModal = () => {
    setShowCommentModal(!showCommentModal);
  };

  return (
    <section className="mt-2 mb-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card
          title="Work requested comment"
          statusText="Requested"
          statusTextColor="text-[#FF7A00]"
          statusBgColor="bg-[#FFE4CB]"
          onClick={handleShowModal}
        />
        <Card
          title="Work approval comment"
          statusText="Approved"
          statusTextColor="text-[#44CF03]"
          statusBgColor="bg-[#D5FFCB]"
          onClick={handleShowModal}
        />
        <Card
          title="Work issued comment"
          statusText="Issued"
          statusTextColor="text-[#ffffff]"
          statusBgColor="bg-[#25BB00]"
          onClick={handleShowModal}
        />
        <Card
          title="Work closure comment"
          statusText="Closed"
          statusTextColor="text-[#ffffff]"
          statusBgColor="bg-[#FF0404]"
          onClick={handleShowModal}
        />
      </div>

      {/* Comment Modal */}
      <CommentsModal
        open={showCommentModal}
        handleClose={() => setShowCommentModal(false)}
      />
    </section>
  );
};

export default CommentsSection;
