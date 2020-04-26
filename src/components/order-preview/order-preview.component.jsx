import React from "react";

import "./order-preview.styles.scss";
import Orderitem from '../order-item/order-item.component';

const OrderPreview = ({ title, items }) => (
  <div className="order-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...OtherItemProps}) => (
          <Orderitem key={id}{...OtherItemProps}/>
        ))}
    </div>
  </div>
);

export default OrderPreview;
