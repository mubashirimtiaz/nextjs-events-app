import EventList from "../../../components/events/Event-List.component";
import { getFilteredEvents } from "../../../helpers/utils";
import { useRouter } from "next/router";
import ErrorAlert from "../../../components/error_alert/Error-Alert.component";
import useSWR from "swr";
import { useEffect, useState } from "react";
const FilteredEvents = () => {
  const [events, setEvents] = useState(null);
  const router = useRouter();
  const slug = router.query.slug;
  const { data, error } = useSWR(
    "https://nextjs-learning-ea34e-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      let manipulateData = [];
      for (const key in data) {
        manipulateData.push({ id: key, ...data[key] });
      }
      setEvents(manipulateData);
    }
  }, [data]);

  if (!events || !slug) {
    return <p>Loading...</p>;
  }
  const year = +slug[0];
  const month = +slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    error ||
    year < 2020 ||
    year > 2022 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <p>Invalid filter, Please adjust your value</p>
      </ErrorAlert>
    );
  }
  const filteredEvents = getFilteredEvents(events, { year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>The event could not be Found.</p>
      </ErrorAlert>
    );
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
