import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';

const Home = () => {
    const [list,setList] = useState([]);
    useEffect(()=>{
            fatchingData();
    },[]);

    const fatchingData = () =>{
            axios.get(`https://dummyjson.com/products`)
            .then(response=>setList(response.data.products))
            .catch(error=>console.error(error));
    }
  return (
    <div className='homePage'>
        <h1>All Items</h1>
        <div className="displayItems">
                {list.map((item,key)=><Card key={key} discription={item}/>)}
        </div>
    </div>
  )
}

export default Home