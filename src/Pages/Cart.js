import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card';
import CheckList from '../Components/CheckList';
const Cart = () => {
  const store = useSelector((state)=> state);
  const [list,setList] = useState([]);
  return (
    <div className='CartPage'>
        <h1 style={{textAlign:"center"}}>Cart Items</h1>
        <div className="displayItems">
                {(store)
                ?store.map((item,key)=>(<Card key={key} discription={item}/>))
                :<p>empty</p>}
        </div>
        {/* <div className="listSection"> */}
          <CheckList listitem={list}/>
        {/* </div> */}
    </div>
  )
}

export default Cart