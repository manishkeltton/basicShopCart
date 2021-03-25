import { Link } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React, { useEffect, useMemo, useState } from 'react';
import CartComponent from '../components/CartComponent';
import PaginationComponenet from './PaginationComponenet';

function Products() {
    const [users, setUsers] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState();
    const [currentCart,setCart] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [cartComponent, setCartComponent] = useState(false);
    const ITEMS_PER_PAGE = 9;
    
    const getUsers = async () =>{
        try{
            const response = await fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then(json =>{ setUsers(json)
            }); 
        }catch(error){
            console.log("my error"+error);
        }
    };
    const addToCart = (data) =>{ 
        console.log(data);
        setItemCount(itemCount+1);
        setCart([...currentCart, data]); 
    }

    useEffect(()=>{
        getUsers();
    },[]);

    const addItem = () => {
        setQuantity(quantity + 1)
    }

    const decItem = () => {
        if(quantity>0) {
            setQuantity(quantity-1)
        }
    }

    const usersData = useMemo(() => {
          let computedUsers = users;
          setTotalItems(computedUsers.length)
          //Current page slice
          return computedUsers.slice( 
              (currentPage - 1)* ITEMS_PER_PAGE, 
              (currentPage - 1)*ITEMS_PER_PAGE+ITEMS_PER_PAGE );
    }, [users, currentPage])

  return (
    <div className='products'>
        {cartComponent && <CartComponent currentCart={currentCart}/>}
        {cartComponent ||
        <div className="container">
            <div className="card-columns">
                {
                    usersData.map((data)=>{
                        return (
                            <div keys={data.id} className="card-body text-center mx-0">
                               <div className="image"><img src={data.avatar_url} className="rounded" width="155"/></div>
                               <p className="card-text">Name</p>
                               <p className="card-text">Price ${50}</p>
                               <p className="card-text">quantity {quantity}</p>
                               <button className="btn btn-outline-primary mx-1"  onClick={() => addItem()}>+</button>
                               <button className="btn btn-outline-primary mx-1" onClick={()=>decItem()}>-</button><br/>
                               <button className="btn btn-outline-primary mt-1" onClick={()=>addToCart(data)}>Add Cart</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pagination">
                <PaginationComponenet 
                    total={totalItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={ page => setCurrentPage(page) }
                />
                <button className="btn btn-outline-info btn-lg" onClick={()=>setCartComponent(true)}>Go To Cart ({itemCount})</button>
            </div>
        </div>}
    </div>
  );
}

export default Products;
