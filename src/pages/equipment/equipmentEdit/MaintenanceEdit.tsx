/* eslint-disable jsx-a11y/label-has-associated-control */

function MaintenanceEdit() {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Safe working code
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Preferred stock code
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium "
          >
            Criticality
          </label>
          <select
            id="countries"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="ScheduleNumber"
            className="block mb-2 text-sm font-medium "
          >
            Maintenance budget
          </label>
          <input
            type="text"
            id="ScheduleNumber"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label htmlFor="Function" className="block mb-2 text-sm font-medium ">
          Description
        </label>
        <input
          type="text"
          id="Function"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
    </div>
  );
}

export default MaintenanceEdit;
