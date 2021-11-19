import React from "react";

class Checkout extends React.Component {
    constructor() {
    super()
    this.state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        creditCard: "",
        zipCode: "",
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value,
    })
}
        
    render() {
        return (
            <div >
            <form id="#checkout">
                <h1>Checkout</h1>
                <label htmlFor="firstName"> 
                First Name
                </label>  
                <input 
                type="text" 
                name="first name" 
                value={this.state.firstName}
                onChange={this.handleChange}
                />
                
                <label htmlFor= "lastName">
                    Last Name
                    </label>
                    <input 
                    type="text" 
                    name="last name" 
                    value={this.state.lastName} 
                    onChange={this.handleChange}
                    />

                    <label htmlFor="emailAddress">
                    Email
                    </label>
                    <input type="email"
                    name="emailAddress" 
                    value={this.state.emailAddress}
                    onChange={this.handleChange}
                    />
                    
                    <label htmlFor="creditCard">
                        Credit Card
                    </label>
                    <input type="creditCard"
                    name="creditCard" 
                    value={this.state.creditCard}
                    onChange={this.handleChange}
                    />

                    <label htmlFor="zipCode">
                        Zip Code
                    </label>
                    <input type="zipCode"
                    name="zipCode" 
                    value={this.state.zipCode}
                    onChange={this.handleChange}
                    />
                <button type="submit"> Buy Now </button>
            </form>
            </div>
        )
    }
}

export default Checkout
