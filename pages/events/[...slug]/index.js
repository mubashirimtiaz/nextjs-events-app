import { useRouter } from "next/router";
import ErrorAlert from "../../../components/error_alert/Error-Alert.component";
import EventList from "../../../components/events/Event-List.component";
import { getFilteredEvents } from "../../../dummy-data";
const FilteredEvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p>Loading...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <ErrorAlert>Invalid filtered please adjust your values </ErrorAlert>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <ErrorAlert>No Events Found</ErrorAlert>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Filtered Event <span className="text-gray-300 underline">Result</span>
      </h1>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
