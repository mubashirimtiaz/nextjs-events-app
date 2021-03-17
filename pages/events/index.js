import EventList from "../../components/events/Event-List.component";
import SearchEvent from "../../components/search_events/Search-Event.component";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/utils";

const Events = ({ events }) => {
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
      <EventList events={events} />
    </>
  );
};
export default Events;
export const getStaticProps = async () => {
  const manipulateEvents = await getAllEvents();
  return {
    props: {
      events: manipulateEvents,
    },
    revalidate: 60,
  };
};
