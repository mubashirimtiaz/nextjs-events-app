import React from "react";
import Link from "next/link";
import AddressSvg from "../icons/Address.component";
import DateSvg from "../icons/Date.component";
import Image from "next/image";
const EventItem = (props) => {
  const { title, image, date, location, id } = props.event;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <figure className="md:flex bg-gray-100 overflow-hidden rounded-xl p-8 md:p-0 my-5">
        {/* <div className="flex md:inline-block justify-center items-center"> */}
        <Image src={`/${image}`} alt={title} width={240} height={240} />
        {/* </div> */}
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">{title}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600 whitespace-pre block md:flex items-center">
              <p className="h-5 w-5 mr-2 hidden md:block">
                <AddressSvg />
              </p>
              {formattedLocation}
            </div>
            <div className="block md:flex items-center mt-2">
              <p className="h-5 w-5 mr-2 hidden md:block">
                <DateSvg />
              </p>
              <span>{readableDate}</span>
            </div>
            <div>
              <Link href={exploreLink}>
                <a className=" flex p-2 mt-2 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-300 hover:text-white">
                  Explore Event
                </a>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    </li>
  );
};

export default EventItem;
