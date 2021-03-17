import { getAllEvents } from "../helpers/utils";
import { useEffect, useState } from "react";
import useSwr from "swr";
import EventList from "../components/events/Event-List.component";
import Head from "next/head";

const Home = ({ events: ssEvents }) => {
  const [events, setEvents] = useState(ssEvents);
  const { data, error } = useSwr(
    "https://nextjs-learning-ea34e-default-rtdb.firebaseio.com/events.json"
  );
  useEffect(() => {
    if (data) {
      let manipulateEvents = [];
      for (const key in data) {
        manipulateEvents.push({
          id: key,
          description: data[key].description,
          title: data[key].title,
          image: data[key].image,
          isFeatured: data[key].isFeatured,
          location: data[key].location,
          date: data[key].date,
        });
      }
      setEvents(manipulateEvents);
    }
  }, [data]);
  if (error) {
    return <p>Encountered an Error...</p>;
  }
  if (!data && !events) {
    return <p>Loading...</p>;
  }
  const featuredEvents = events.filter((event) => event.isFeatured == true);
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve!"
        />
      </Head>
      <h1 className="text-4xl font-bold">
        Featured <span className="text-gray-300 underline">Events</span>
      </h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const manipulateEvents = await getAllEvents();

  return {
    props: {
      events: manipulateEvents,
    },
    revalidate: 1800,
  };
};
