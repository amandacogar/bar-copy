import React from "react";
import { Image } from "react-bootstrap";

function EventList({ data }) {
  return (
    <>
      <a href={data.link} className="event">
        <Image src={data.image} alt="" className="event-image" />
        <h3 className="event-title">
          {data.title}
          <span className="arrow">
            <i class="fas fa-arrow-right"></i>
          </span>
        </h3>
        <p className="event-description">{data.description}</p>
      </a>
    </>
  );
}

export default EventList;
