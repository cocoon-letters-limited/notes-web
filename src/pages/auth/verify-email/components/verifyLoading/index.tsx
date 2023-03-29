import Spinner from "components/elements/spinner";

const VerifyLoading = () => {
  return (
    <div className="pt-8 lg:pt-12 flex flex-col items-center mx-auto text-center">
      <div className="w-8/12 mx-auto">
        <Spinner />
      </div>
      <div className="mt-8 ">
        <p className="text-xl lg:text-2xl font-bold text-primary">
          Verifying Email
        </p>
        <p className="mt-2 text-base lg:text-lg text-textColor">
          Please wait while we verify your email
        </p>
      </div>
    </div>
  );
};

export default VerifyLoading;
