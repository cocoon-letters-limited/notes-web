function PaymentForm() {
  return (
    <div>
      <div className="">
        <div className="">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:border-blue-500 block w-full mb-3 p-2.5 "
            placeholder="Card Number"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:border-blue-500 block w-full p-2.5 "
              placeholder="CVV"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:border-blue-500 block w-full p-2.5 "
              placeholder="EXP Date"
              required
            />
          </div>
        </div>
      </div>
      <button
        className="btn bg-blue-600 text-white p-2 w-fit mt-5 px-4 rounded-lg"
        type="submit"
      >
        Confirm
      </button>
      <button
        className="btn bg-gray-200 p-2 w-fit px-4 rounded-lg ml-3"
        type="submit"
      >
        Cancel
      </button>
    </div>
  );
}

export default PaymentForm;
