import React, { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import food from "./food.json";
import drinks from "./drinks.json";
import happyHour from "./happyHour.json";
import MenuItem from "./menu-items.js";

function Menu() {
  const [menu, setMenu] = useState("food");
  const [data, setData] = useState(food.options);

  const handleFood = (e) => {
    setMenu("food");
    setData(food.options);
  };

  const handleDrinks = (e) => {
    setMenu("drinks");
    setData(drinks.options);
  };

  const handleHappyHour = (e) => {
    setMenu("happy hour");
    setData(happyHour.options);
  };

  return (
    <>
      <section id="menu">
        <Image
          src="https://images.unsplash.com/photo-1562259934-6e09f6a89a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          fluid
          alt=""
          id="landing-image"
        />
        <div id="menu-buttons">
          <Button className="menu-options" id="food" onClick={handleFood}>
            Food
          </Button>
          <Button className="menu-options" id="drinks" onClick={handleDrinks}>
            Drinks
          </Button>
          <Button
            className="menu-options"
            id="happy-hour"
            onClick={handleHappyHour}
          >
            Happy Hour
          </Button>
        </div>
        <Container className="menu">
          <h2 className="page-heading">{menu}</h2>
          <div className="menu-body">
            {data.map((option, i) => (
              <MenuItem data={option} key={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Menu;
