import React from 'react'
import { Link } from 'react-router-dom';
import {IMG_CDN_URL} from './config'
function Showm({card}) {
    const items=card.itemCards;
  return (<>
    {
        items.map((i,index)=>(<Link style={{margin:"5px"}} key={index} to={`/Restaurants/${i.card?.info?.id}`}>
            <span >
               <img src={`${IMG_CDN_URL+i?.card?.info?.imageId}.jpg`} alt="" /> 
                {i?.card?.info?.name}
       
        </span></Link>))
    }
    </>
  )
}

export default Showm