import "./App.css";
import React from "react";
import ProductList from "./components/ProductList";
import Headings from "./components/Heading";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import productData from "./data/productData";
// import productData from "./data/productData";

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    cart: [],
    product: productData,
    //OR I COULD USE product: productData && IMPORT FILE
    subtotal: 0,
    // total: 0,
  }
};

updateCart = (product) => {
  this.setState({
    cart: [...this.state.cart, product],
    subtotal: this.state.subtotal + product.price,
    // total: ""
    })
  };

  
  render() {
  // console.log("DO I WORK")
  let taxTotal = (this.state.subtotal * 0.05) + this.state.subtotal
  return (
    <section className="products">
      <Headings />
      <ProductList updateCart={this.updateCart}/>
      <div>
      <Cart cart={this.state.cart}
      subtotal={this.state.subtotal}/>
      </div>
      <div>
      <Checkout total={taxTotal}/>
      </div>
    </section>
  )
}
}

export default App;
