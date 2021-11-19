import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props,
    };
  }

  render() {
    return (
      <div>
            <h2>Cart</h2>
            
        
          <span>{(this.state.product.name, this.state.product.price)}</span>
          <h2>Subtotal: {this.props.price}</h2>
          <h2>Tax: {}</h2>
          <h2>Total: {}</h2>
        
        
      </div>
    );
  }
}

export default Cart;
