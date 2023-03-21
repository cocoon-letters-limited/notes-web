import OpenIcon from "assets/images/svg/icons/open.svg";
import CloseIcon from "assets/images/svg/icons/close.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const MenuToggler = ({ isOpen, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="py-3 h-10">
      <img src={isOpen ? CloseIcon : OpenIcon} alt="Open icon" />
    </button>
  );
};

export default MenuToggler;
