import React from "react";
import { Image, Button } from "react-bootstrap";

function EventList({ data }) {
  return (
    <>
      <a href={data.link} className="event">
        <Image src={data.image} alt="" className="event-image" />
        <div id="dark-layer-event"></div>
        <div className="event-info">
          <h3 className="event-title">{data.title}</h3>
          <p className="event-description">{data.description}</p>
          <Button className="event-btn">get on the list</Button>
        </div>
      </a>
    </>
  );
}

export default EventList;
