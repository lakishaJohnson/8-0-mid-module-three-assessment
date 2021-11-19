import "./App.css";
import React from "react";
import ProductList from "./components/ProductList";
import Headings from "./components/Heading";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    cart: [],
    checkout: "",
    listProductInput: "",
    price: "",
    name: "",
    product: "",
  }
};

// handleAddToCart = (event) => {
//   event.preventDefault()
//   const {cart, listProductInput, price} = this.state
//   this.setState({
//     cart: [...cart, {name: listProductInput, price: price}]
//   })
// }

updateCart = (event) => {
  this.setState({
  product: event.target.value
  })
};

render() {
  return (
    <section className="products">
      <Headings />
      <ProductList product={this.product}/>
      <Cart updateCart={this.updateCart}
      />
      <Checkout />
    </section>
  )
}
}

export default App;
