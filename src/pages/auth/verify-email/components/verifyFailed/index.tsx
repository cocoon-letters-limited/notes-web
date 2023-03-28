import FailedImage from "assets/images/webp/cancel.png";
import ButtonGroup from "components/elements/button";

type Props = {
  handleToggleShowForm?: () => void;
};

const VerifyFailed = ({ handleToggleShowForm }: Props) => {
  return (
    <div className="pt-8 lg:pt-12 flex flex-col items-center mx-auto text-center">
      <div className="w-3/12 mx-auto">
        <img src={FailedImage} alt="Success icon" />
      </div>
      <div className="mt-6">
        <p className="text-xl lg:text-2xl font-bold text-primary">
          Verification failed!
        </p>
        <p className="mt-2 text-base lg:text-lg text-textColor">
          Click the button below to resend verification link
        </p>

        <div className="mt-6 space-y-6 lg:space-y-8">
          <ButtonGroup
            type="button"
            title="Resend Verification Email"
            onClick={handleToggleShowForm}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyFailed;
