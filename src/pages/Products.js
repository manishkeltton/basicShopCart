import { Link } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import PaginationComponenet from './PaginationComponenet';

function Products() {
  const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState();
    const ITEMS_PER_PAGE = 6;
    
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

    useEffect(()=>{
        getUsers();
    },[]);

    const addItem = () => {
        setCount(count + 1)
    }

    const decItem = () => {
        if(count>0) {
            setCount(count-1)
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
      <div className="container">
      <div class="card-columns">
                {
                    usersData.map((Elm)=>{
                        return (
                            <div keys={Elm.id} class="card-body text-center mx-0">
                               <div class="image"><img src={Elm.avatar_url} class="rounded" width="155"/></div>
                               <p class="card-text">Name</p>
                               <p class="card-text">Price</p>
                               <p class="card-text">item {count}</p>
                               <button class="btn btn-outline-primary mx-1"  onClick={addItem}>+</button>
                               <button class="btn btn-outline-primary mx-1" onClick={decItem}>-</button><br/>
                               <Link class="btn btn-primary mt-1" to="#">Add Cart</Link>
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
            </div>
          </div>
    </div>
  );
}

export default Products;
