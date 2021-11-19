import React from "react";
import productData from "../data/productData";

class ProductList extends React.Component {


render() {
    return (
      <section className="products">
        {productData.map((product, i) => {
          return (
            <div key={i}>
              <h1>{product.name}</h1>
              <p>Price: ${product.price.toFixed(2)} </p>
              {/* <button>Add To Cart</button> */}
              <button onClick={(event) => this.updateCart(event.target.value)}>Add To Cart</button>
              <p>{product.description}</p>
              <img className="product" src={product.img} alt={product.name} />
            </div>
          );
        })}
      </section>
    );
  }
}

export default ProductList;
