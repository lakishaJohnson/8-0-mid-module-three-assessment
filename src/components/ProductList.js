import React from "react";
import productData from "../data/productData";

class ProductList extends React.Component {

  render() {
    const { updateCart } = this.props;

    return (
      <section className="products">
        {productData.map((product, i) => {

          return (
            <div key={i}>
              <h1>{product.name}</h1>
              <p>Price: ${product.price.toFixed(2)} </p>
              <p>{product.description}</p>
              <img className="product" src={product.img} alt={product.name} />
              
              <button type="submit" onClick={() => updateCart(product)}>Add To Cart</button>

              {/* OR...<button onClick={this.props.updateCart}>Add To Cart</button>... WITHOUT DECONSTRUCTORING*/}
            </div>
          );
        })}
      </section>
    );
  }
}
// name={product.name} value={product.price}
export default ProductList;
