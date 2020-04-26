import React from "react";
import ORDER_DATA from "./order.data";

import OrderPreview from "../../components/order-preview/order-preview.component";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: ORDER_DATA,
    };
  }
  render() {
      const {foods} = this.state;
    return (
      <div className='order-page'>
        {
            foods.map(({id, ...OtherOrderProps}) => (
                <OrderPreview key ={id} {...OtherOrderProps} /> 
            ))
        }
      </div>
    );
  }
}

export default OrderPage;
