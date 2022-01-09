import React from "react";
import { Image, Container } from "react-bootstrap";

function VisitUs() {
  const handleSubmit = (e) => {};
  return (
    <>
      <section className="section" id="visit">
        <Image
          src="https://images.unsplash.com/photo-1562259934-6e09f6a89a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          fluid
          alt=""
          id="landing-image"
        />
        <Container className="display" id="visit-display">
          <h2 className="page-heading" id="visit-header">
            stop in and say hi
          </h2>
          <div id="visit-body">
            <div id="contact-info">
              <div className="contact-method">
                <h4>
                  <i class="fas fa-map-marker-alt"></i>Address
                </h4>
                <a href="https://goo.gl/maps/W4R2u2UpK69HbmBj6">
                  123 Easy St, Seattle, WA, 98109
                </a>
              </div>
              <div className="contact-method">
                <h4>
                  <i class="fas fa-phone"></i>Call Us
                </h4>
                <p>((555) 555-5555</p>
              </div>
              <div className="contact-method">
                <h4>
                  <i class="fas fa-clock"></i>Hours
                </h4>
                <p>Weekdays: 12:00pm-2:00am</p>
                <p>Weekends: 11:00am-2:00am</p>
              </div>
              <div className="contact-method">
                <a href="https://www.instagram.com">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.yelp.com/">
                  <i class="fab fa-yelp"></i>
                </a>
              </div>
            </div>
            <div id="contact-form">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.41616050157!2d-122.48214609026915!3d47.612943184978924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1641708439398!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default VisitUs;
