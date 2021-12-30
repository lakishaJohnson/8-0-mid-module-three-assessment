import React from "react";

class Checkout extends React.Component {
    constructor(props) {
    super(props)

    this.state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        creditCard: "",
        zipCode: "",
    }
}

handleOnChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value
    })
}    

handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "") {
        alert("Input is not valid")
    }
    if (this.state.creditCard.length !== 16) {
        alert("Credit card number is not valid")
    }
    if (this.state.zipCode.length !== 5) {
        alert("Zip code is not valid")
    } else {
        alert(`Purchase complete: $${this.props.total.toFixed(2)}`)
    }
}

render() {
        return (
            <div >
            <form  onSubmit={this.handleSubmit} id="checkout">
                <h1>Checkout</h1>
                <label htmlFor="firstName"> 
                First Name
                <input 
                type="text" 
                name="firstName" 
                value={this.state.firstName}
                onChange={this.handleOnChange}
                />
                </label> 
                 
                <label htmlFor= "lastName">
                    Last Name
                    <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleOnChange}
                    />
                    </label>
                
                    <label htmlFor="emailAddress">
                    Email
                    <input type="text"
                    name="emailAddress" 
                    value={this.state.emailAddress}
                    onChange={this.handleOnChange}
                    />
                    </label>
                    
                    <label htmlFor="creditCard">
                        Credit Card
                    <input type="text"
                    name="creditCard" 
                    value={this.state.creditCard}
                    onChange={this.handleOnChange}
                    />
                    </label>

                    <label htmlFor="zipCode">
                        Zip Code
                    <input type="text"
                    id="zipCode"
                    name="zipCode" 
                    value={this.state.zipCode}
                    onChange={this.handleOnChange}
                    />
                    </label>
                    
                <button type="submit"> Buy Now </button>
            </form>
            </div>
        )
    }
}
                    
                    

                    

export default Checkout
