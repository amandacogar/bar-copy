import React from "react";
import { Image } from "react-bootstrap";
import aboutImage from "./about-cropped.jpg";

function GetToKnowUs() {
  return (
    <>
      <section className="section" id="about">
        <div id="about-frame-1">
          <Image src={aboutImage} fluid alt="" id="about-photo" />
          <div id="dark-layer"></div>
        </div>
        <div id="about-frame-2">
          <h2 className="page-heading" id="about-header">
            our story
          </h2>
          <div className="about-info">
            <p className="about-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              lorem gravida adipiscing pharetra, mattis molestie rutrum ac.
              Nulla dolor felis id pretium vel tincidunt. Adipiscing eget vitae
              vestibulum amet fringilla amet quisque sit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Blandit lorem gravida
              adipiscing pharetra, mattis molestie rutrum ac. Nulla dolor felis
              id pretium vel tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Blandit lorem gravida adipiscing pharetra, mattis
              molestie rutrum ac. Nulla dolor felis id pretium vel tincidunt.
            </p>
          </div>
          <div className="about-info">
            <Image
              src={
                "https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
              }
              fluid
              alt=""
              className="about-images"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              fluid
              alt=""
              className="about-images"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1601053397261-2552332609fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              }
              fluid
              alt=""
              className="about-images"
            />
          </div>
          <div className="description-line" id="line-3"></div>
        </div>
      </section>
    </>
  );
}

export default GetToKnowUs;
