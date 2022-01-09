import React from "react";
import { Image, Container } from "react-bootstrap";

function GetToKnowUs() {
  return (
    <>
      <section className="section" id="about">
        <Image
          src="https://images.unsplash.com/photo-1562259934-6e09f6a89a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          fluid
          alt=""
          id="landing-image"
        />
        <Container className="display">
          <h2 className="page-heading" id="about-header">
            get to know us heading example
          </h2>
          <div id="about-body">
            <div id="about-images">
              <Image
                className="about-images"
                src="https://images.unsplash.com/photo-1558210598-89ba75b1724e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
              <Image
                className="about-images"
                src="https://images.unsplash.com/photo-1534390909446-dce38dbec04e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
            <div id="about-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default GetToKnowUs;
