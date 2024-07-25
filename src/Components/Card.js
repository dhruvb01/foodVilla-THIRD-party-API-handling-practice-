import React from 'react'
import '../Card.css';
import {IMG_CDN_URL} from '../Components/config'



function Card({info}) {
  const name=info?.name
  const type=info?.cuisines.join(", ")
  const image=info?.cloudinaryImageId
  const cardStyle = {
    backgroundColor: 'rgb(247, 210, 161)',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
    width:"200px",
    height:"300px",
    
    
  };

  const titleStyle = {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const contentStyle = {
    color: '#666',
  };
 
  return (
   <div style={{position:"relative"}} >
   
   <div style={cardStyle}>
    <img src={IMG_CDN_URL+image} alt="img" style={{ width: '100px', height: '100px', borderRadius: '4px' }}/>
<h3 style={titleStyle}>{name}</h3>
<p style={contentStyle}>{type}</p>
   </div>
   </div>
  )
}


export const highOrder=(Card)=>{
  return (props)=>{
    return (
<div className="relative-container">
      <label className="label-style">Veg</label>
      <Card {...props} className="card-style" />
    </div>
    )
  }
}

export default Card
