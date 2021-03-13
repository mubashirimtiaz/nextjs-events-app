import Head from "next/head";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/Event-List.component";
import SearchEvent from "../../components/search_events/Search-Event.component";
import { useRouter } from "next/router";

const allEvents = getAllEvents();

const Events = () => {
  const router = useRouter();
  const handleEventSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <h1 className="text-4xl font-bold">
        All <span className="text-gray-300 underline">Events</span>
      </h1>
      <SearchEvent searchEvent={handleEventSearch} />
      <EventList events={allEvents} />
    </>
  );
};
export default Events;
