import React from "react";
import { Button } from "react-bootstrap";

function Home() {
  function noActives() {
    let links = document.querySelectorAll(".nav-link");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove(".active");
    }
  }
  noActives();

  return (
    <>
      <section className="section" id="home">
        <div className="frame" id="home-frame">
          <Button href="https://www.opentable.com/" id="home-btn-1">
            get on the list
          </Button>
          <Button
            href="https://bartemplate.amandacogar.com/menu"
            id="home-btn-2"
          >
            see the menu
          </Button>
        </div>
        <div className="frame" id="description-frame">
          <div id="home-info">
            <div className="description-line" id="line-1"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              lorem gravida adipiscing pharetra, mattis molestie rutrum ac.
              Nulla dolor felis id pretium vel tincidunt. Adipiscing eget vitae
              vestibulum amet fringilla amet quisque sit. Enim dui risus ornare
              egestas rhoncus ullamcorper.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              lorem gravida adipiscing pharetra, mattis molestie rutrum ac.
            </p>
            <div className="description-line" id="line-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
