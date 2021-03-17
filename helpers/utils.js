const getAllEvents = async () => {
  const response = await fetch(
    "https://nextjs-learning-ea34e-default-rtdb.firebaseio.com/events.json"
  );
  const events = await response.json();
  let manipulateEvents = [];
  for (const key in events) {
    manipulateEvents.push({
      id: key,
      description: events[key].description,
      title: events[key].title,
      image: events[key].image,
      isFeatured: events[key].isFeatured,
      location: events[key].location,
      date: events[key].date,
    });
  }
  return manipulateEvents;
};

function getFilteredEvents(eventsArr, dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = eventsArr.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
export { getAllEvents, getFilteredEvents };
