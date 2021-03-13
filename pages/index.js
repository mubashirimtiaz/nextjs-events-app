import Head from "next/head";
import EventList from "../components/events/Event-List.component";
import { getFeaturedEvents } from "../dummy-data";

const featuredEvents = getFeaturedEvents();

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Featured <span className="text-gray-300 underline">Events</span>
      </h1>
      <EventList events={featuredEvents} />
    </div>
  );
};
export default Home;
