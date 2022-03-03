import React, { useState } from "react";
import { Container } from "react-bootstrap";
import events from "./events.json";
import EventList from "./event-list.js";

function Events() {
  const [data, setData] = useState(events.events);

  return (
    <>
      <section className="section" id="events">
        <Container className="display">
          <h3 className="page-heading">events</h3>
          <div id="event-body">
            {data.map((event, i) => (
              <EventList data={event} key={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Events;
