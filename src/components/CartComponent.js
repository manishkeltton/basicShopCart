import { Link } from '@material-ui/core';
import { Button } from 'bootstrap';
import React, { useState } from 'react'
import InvoiceComponent from './InvoiceComponent';

const CartComponent = ({currentCart}) => {
    const [invoice, setInvoice] = useState(false);
    const [cartValue, setCartItem] = useState([...currentCart]);
    console.log(currentCart);

    const removeFromCart = (cart) => {
        let hardCopy = [...cartValue];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== cart.id);
        setCartItem(hardCopy);
      };

    const invoiceItem = () => setInvoice(true);

    return (
        <div className="container">
            {invoice || 
            <div className="py-4">
            <h1>Cart Item</h1>
            {/* <Link to="/" className="btn btn-btn-primary">Back To Product</Link> */}
            <table class="table border shadow">
             <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Products</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                cartValue.map((cart, index)=>
                    (
                        <tr>
                            <th scope="row">{ index+1 }</th>
                            <td><img src={cart.image} style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="round"/></td>
                            <td>{cart.category}</td>
                            <td>${cart.quantity*cart.price}</td>
                            <td>{cart.quantity}</td>
                            <td>
                                <button class="btn btn-danger" onClick={() => removeFromCart(cart)}>remove</button>
                            </td>
                        </tr>
                    )
                )
            }
        </tbody>
    </table>
    <button className="btn btn-outline-info" onClick={()=>invoiceItem()}>Check Out</button>
    </div>}
    {invoice && <InvoiceComponent cartValue={cartValue} />}
    </div>
    )
}

export default CartComponent
