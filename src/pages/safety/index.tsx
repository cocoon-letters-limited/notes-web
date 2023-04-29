function Safety() {
  return (
    <div>
      <div>
        <div className="grid-cols-3 grid">
          <div className="col-span-1">
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title:
            </p>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Softwebdigital"
              required
            />
          </div>
          <p className="text-right">Status: Issued</p>
          <p className="text-right">Risk assessment No: RA102322</p>
        </div>
      </div>
      <div>
        <div>.</div>
      </div>
    </div>
  );
}

export default Safety;
