import { getAllEvents } from "../../helpers/utils";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

const EventDetail = ({ event }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={`${event.description}`} />
      </Head>
      <h1 className="text-4xl font-bold">
        Event <span className="text-gray-300 underline">Detail</span>
      </h1>
      <figure className="md:flex bg-gray-100 overflow-hidden rounded-xl p-8 md:p-0 my-5">
        <Image
          // className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={`/${event.image}`}
          alt=""
          width={600}
          height={400}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">“{event.description}”</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">{event.date}</div>
            <div className="text-gray-500 whitespace-pre">
              {event.location.replace(", ", "\n")}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default EventDetail;

export const getStaticPaths = async () => {
  const manipulateEvents = await getAllEvents();
  const featuredEvents = manipulateEvents.filter(
    (event) => event.isFeatured == true
  );
  const paths = featuredEvents.map((event) => ({
    params: { eventId: event.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { eventId } = context.params;
  const manipulateEvents = await getAllEvents();

  const event = manipulateEvents.find(
    (event) => event.id.toString() === eventId.toString()
  );

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};
