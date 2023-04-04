import AvatarImage from "assets/images/webp/team/teamAvatar.webp";

type Props = {
  profilePicture: string | undefined;
  name: string;
  role: string;
};

const TeamCard = ({ profilePicture, name, role }: Props) => {
  return (
    <div className="mb-12 lg:mb-16 w-10/12 md:w-4/12 lg:w-3/12 mx-auto text-center px-8">
      <div className="">
        <img
          src={profilePicture || AvatarImage}
          alt="Tunde Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 lg:mt-6">
        <p className="text-lg lg:text-xl text-default">{name}</p>
        <p className="mt-2 text-sm-15 lg:text-base text-textColor">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
