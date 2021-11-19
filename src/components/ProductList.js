import React from "react"
import productData from "../data/productData";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        price: "",
        img: "",
        description: "",
      },
    };
  }

  render() {
      
      return (
          <section>
               {productData.map((product, i) => {
                     return (
                         <div> 
            <h1>{product.name}</h1>
            <p>Price: ${product.price} </p>
            <button >Add To Cart</button>
            {/* <button onClick={this.updateCart}>Add To Cart</button> */}
            <p>{product.description}</p>
            <img className="product" src={product.img} alt={product.name} />
            </div>
                 )}
                 )
                 }
                 </section>
      )
    }
}

 export default ProductList