import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
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
          <div id="menu-header">
            <h4>Original Specialties</h4>
            <div id="menu-title">
              <div className="header-line"></div>
              <h2 id="menu-page-heading" className="page-heading">
                {menu}
              </h2>
              <div className="header-line"></div>
            </div>
          </div>

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
