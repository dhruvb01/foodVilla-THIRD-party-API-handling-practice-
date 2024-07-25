import React, { useState } from 'react'
import Showm from './Showm';



function Caras({card,show,changes,}) {
  
    function handleClick(){
      changes()
        }
    const title=card.card.title;
  return (<>
    <div  style ={{
  display: "flex",
border:"1px solid black",
  width: "50vw",
  height: "5vh",
  cursor: "pointer",
}} onClick={handleClick}>{title+" "+`(${card?.card?.itemCards.length})`}</div>
    {show&&<Showm {...card}></Showm>}
    </>
  )
}

export default Caras