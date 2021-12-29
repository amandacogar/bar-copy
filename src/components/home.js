import React from "react";
import { Image } from "react-bootstrap";

function Home() {
  return (
    <>
      <section className="section" id="home">
        <Image
          src="https://images.unsplash.com/photo-1562259934-6e09f6a89a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          fluid
          alt=""
          id="landing-image"
        />
        <h1 id="logo">The Local Bar</h1>
      </section>
    </>
  );
}

export default Home;
