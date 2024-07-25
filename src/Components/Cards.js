import React from 'react'
import Shimmer from './Shimmer'
import Card ,{highOrder} from './Card'
import { Link } from 'react-router-dom';
import './Cards.css'
import { useDispatch } from 'react-redux';
import {addItems} from '../utils/cartSlice'
function Cards({restaurants,filterRest}) {


const VegCard=highOrder(Card);

const dispatch=useDispatch()

const handleClick=(card)=>{
 
dispatch(addItems(card))
}

  const innerContainerStyle = {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    flexWrap: 'wrap', 
    justifyContent: 'space-around', 
    alignItems: 'flex-start',
    position:"relative",
  };
 
  if(restaurants.length===0) return <Shimmer/>;
  return filterRest.length===0?(<h1>No Restaurant Found!!!</h1>):(
    <div style={innerContainerStyle} >
      {        filterRest.map((card)=>{
          return (
            <div className="card-container">
              <button className="add-button" onClick={()=>handleClick(card)}>ADD</button>
              <Link key={card?.info?.id} to={`/Restaurants/${card?.info?.id}`} className="card-link">
                {card.info.veg ? <VegCard {...card} /> : <Card {...card} />}
              </Link>
            </div>
          );
    })
    }
    </div>
  )
}

export default Cards