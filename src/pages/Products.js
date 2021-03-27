import React, { useEffect, useMemo, useReducer, useState } from 'react';
import CartComponent from '../components/CartComponent';
import PaginationComponenet from './PaginationComponenet';

// const initialState = 1;
// const reducer = (state, action) =>{
//       console.log(state, action);
//       if(action.type === "INCREMENT") {
//         return state+1;
//       }else{    
//         return state > 1? state-1:1;
//       }
// }

function Products() {
    const [users, setUsers] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentCart,setCart] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [cartComponent, setCartComponent] = useState(false);
    // const [state, dispatch] = useReducer(reducer, initialState);

    const ITEMS_PER_PAGE = 9;
    
    const getUsers = async () =>{
        try{
            const response = await fetch('https://api.mocki.io/v1/382a5a6c')
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

    const addItem = (i) => {
        const newItems = [...users];
        newItems[i].quantity+=1;
        setUsers(newItems);
    }

    const decItem = (i) => {
        const newItems = [...users];
        if(newItems[i].quantity > 1) {
            newItems[i].quantity-=1;
            setUsers(newItems);
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
                    usersData.map((data,i)=>{
                        return (
                            <div keys={i} className="card-body text-center mx-0">
                               <div className="image"><img src={data.image} style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="round"/></div>
                               <p className="card-text">{data.category}</p>
                               <p className="card-text">${data.price}</p>
                               <p className="card-text">quantity {data.quantity}</p>
                               <button className="btn btn-outline-primary mx-1"  onClick={() => addItem(i)}>+</button>
                               <button className="btn btn-outline-primary mx-1" onClick={()=> decItem(i)}>-</button><br/>
                               <button className="btn btn-outline-primary mt-1" onClick={()=> addToCart(data)}>Add Cart</button>
                            </div>
                        )
                    })
                }
            </div><br/>
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
