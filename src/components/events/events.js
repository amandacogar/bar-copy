import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";
import events from "./events.json";
import EventList from "./event-list.js";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";

function Events() {
  const [data, setData] = useState(events.events);

  return (
    <>
      <section className="section" id="events">
        <Image
          src="https://images.unsplash.com/photo-1562259934-6e09f6a89a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          fluid
          alt=""
          id="landing-image"
        />
        <Container className="display">
          <h3 className="page-heading">events</h3>
          <div id="event-body">
            <div id="recurring-events">
              {data.map((event, i) => (
                <EventList data={event} key={i} />
              ))}
            </div>
            <div id="calendar">
              <ReactEmbeddedGoogleCalendar publicUrl="https://calendar.google.com/calendar/embed?src=msamandacogar%40gmail.com&ctz=America%2FLos_Angeles" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Events;
