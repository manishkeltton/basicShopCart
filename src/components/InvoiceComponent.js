import React from 'react'

const InvoiceComponent = ({cartValue}) => {
    return (
        <div className="products">
           {
                cartValue.map((item)=>           
                    <ul className="list-group w-50">
                        <li className="list-group-item"><img src={item.image} style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="round"/></li>
                        <li className="list-group-item"> Name: {item.category}</li>
                        <li className="list-group-item">Price: ${item.quantity*item.price}</li>
                        <li className="list-group-item">Quantity: {item.quantity}</li>
                        <li className="list-group-item">Total Price: ${item.quantity*item.price}</li>
                    </ul>
                )
            }   
        </div>
    )
}

export default InvoiceComponent
