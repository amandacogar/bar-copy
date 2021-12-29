import React from "react";

function MenuItems({ data }) {
  return (
    <>
      <div className="menu-items">
        <h3 className="title">{data.item}</h3>
        <h4 className="description">{data.description}</h4>
        <h5 className="price">{data.price}</h5>
      </div>
    </>
  );
}

export default MenuItems;
