import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
const EventDetail = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  // const { title, description, date, image, isFeatured, location } = event;

  if (!event) {
    return <h1>Not Found</h1>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold">
        Event <span className="text-gray-300 underline">Detail</span>
      </h1>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-5">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={`/${event.image}`}
          alt=""
          width="384"
          height="512"
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
