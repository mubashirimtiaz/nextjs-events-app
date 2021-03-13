import { useRef } from "react";
const SearchEvent = (props) => {
  const yearInputRef = useRef("");
  const monthInputRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.searchEvent(selectedYear, selectedMonth);
  };
  return (
    <form
      className="bg-gray-100 shadow-inner mt-5 py-2 px-5  rounded-full"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between items-center">
        <div>
          <label htmlFor="year">Year: </label>
          <select
            name="year"
            id="year"
            ref={yearInputRef}
            className="border border-gray-700 rounded-full "
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month: </label>
          <select
            name="month"
            id="month"
            ref={monthInputRef}
            className="border border-gray-700 rounded-full "
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div>
          <button className="text-sm py-2 px-3  items-center justify-center rounded-full border border-gray-300 hover:bg-gray-300 hover:text-white">
            search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchEvent;
