import INTEGRATE from "assets/logoImages/INTEGRATE.png";
import Visa from "assets/logoImages/VISA.png";
import STRIPE from "assets/logoImages/STRIPE.png";
import SAP from "assets/logoImages/SAP.png";
import ESRI from "assets/logoImages/ESRI.png";
import MASTERCARD from "assets/logoImages/MASTERCARD.png";
import MAXIMO from "assets/logoImages/MAXIMO.png";
import SIMANTICS from "assets/logoImages/SIMANTICS.png";
import YOKOGAWA from "assets/logoImages/YOKOGAWA.png";

const imageList = [
  {
    id: 1,
    imagePath: INTEGRATE,
  },
  {
    id: 2,
    imagePath: Visa,
  },
  {
    id: 3,
    imagePath: STRIPE,
  },
  {
    id: 4,
    imagePath: SAP,
  },
  {
    id: 5,
    imagePath: ESRI,
  },
  {
    id: 6,
    imagePath: MASTERCARD,
  },
  {
    id: 70,
    imagePath: SIMANTICS,
  },
  {
    id: 8,
    imagePath: MAXIMO,
  },
  {
    id: 9,
    imagePath: YOKOGAWA,
  },
];
function Logolist() {
  return (
    <div className="md:grid-cols-3 ml:m-0 ml-5 ">
      {imageList.map((data) => (
        <button
          type="button"
          key={data.id}
          className=" font-bold mr-5 mb-5 rounded-lg w-fit h-fit"
        >
          <img
            className="md:h-20 h-10"
            src={data.imagePath}
            alt="product"
            sizes=""
          />
        </button>
      ))}
    </div>
  );
}

export default Logolist;
