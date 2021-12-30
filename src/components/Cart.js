import React from "react";

class Cart extends React.Component {
  render() {
     console.log(this.props);
    const { cart, subtotal } = this.props;
    let cartContents = cart.map((product, i) => {
      return (
        <li key={i}>{product.name}: ${product.price.toFixed(2)}</li>
      )
      
});
    
    let taxTotal = subtotal * 0.05
    let netTotal = taxTotal + subtotal

    return (
      <div>
        <h2>Cart</h2>
        <ul>
            {cartContents}
        </ul>
        
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
        <h2>Tax: ${taxTotal.toFixed(2)}</h2>
        <h2>Total: ${netTotal.toFixed(2)}</h2>
      </div>
    );
  }
}

export default Cart;
