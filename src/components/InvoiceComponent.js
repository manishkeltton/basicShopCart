import React from 'react'

const InvoiceComponent = ({cartValue}) => {
    return (
        <div className="products">
           {
                cartValue.map((item)=>           
                    <ul className="list-group w-50">
                        <li className="list-group-item"><img src={item.avatar_url} className="rounded" width="155"/></li>
                        <li className="list-group-item"> Name:</li>
                        <li className="list-group-item">Price:</li>
                        <li className="list-group-item">Quantity:</li>
                        <li className="list-group-item">Total Price:</li>
                    </ul>
                )
            }
            
        </div>
    )
}

export default InvoiceComponent
