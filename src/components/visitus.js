import React from "react";
import { Image } from "react-bootstrap";

function VisitUs() {
  return (
    <>
      <section className="section" id="visit">
        <Image
          src="https://images.unsplash.com/photo-1541296481353-b1eb3a4e0309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          fluid
          alt=""
          id="visit-photo"
        />
        <div id="dark-cast"></div>
        <div id="visit-body">
          <div className="contact-method">
            <i class="fas fa-clipboard-list"></i>
            <a href="https://opentable.com/">get on the list</a>
          </div>
          <div className="contact-method">
            <i className="fas fa-clock"></i>
            <p>Weekdays: 12:00pm-2:00am</p>
            <p>Weekends: 11:00am-2:00am</p>
          </div>
          <div className="contact-method">
            <i className="fas fa-map-marker-alt"></i>
            <a href="https://goo.gl/maps/W4R2u2UpK69HbmBj6">
              123 Easy St, Seattle, WA, 98109
            </a>
          </div>
          <div className="contact-method">
            <i className="fas fa-phone"></i>
            <p>(555) 555-5555</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisitUs;
