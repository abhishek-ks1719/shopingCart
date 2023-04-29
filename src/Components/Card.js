import React, { useState } from 'react'
import {useDispatch } from 'react-redux';

const Card = ({discription}) => {
  // console.log(discription);
  const {thumbnail,price,title,id} = discription;
  const dispatch = useDispatch();
  const addToCart = ()=>{
    dispatch({type:"ADD",data:{thumbnail,price,title,id}})
  }
  return (
    <div className="card">
        <div className="itemImage">
        <img src={thumbnail} alt="item" />
        </div>
        {/* <div className="itemDetails"> */}
        <label htmlFor="">Title:{title}</label>
        <label htmlFor="">Price:${price}</label>
        <button onClick={addToCart}>Add to cart</button>
        {/* </div> */}
    </div>
  )
}

export default Card