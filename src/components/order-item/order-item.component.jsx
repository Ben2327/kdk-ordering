import React from "react";

import "./order-item.styles.scss";

const OrderItem = ({ id, name, price, imageUrl }) => (
  <div className="order-item">
    <div className="image" 
    style  =
    {{
      backgroundImage: `url(${imageUrl})`,
    }}
    />
    <div className="order-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default OrderItem;
