import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import {highOrder} from './Card'
import { Link } from 'react-router-dom'
import { clearCart,removeItem } from '../utils/cartSlice'
import './Cart.css'
function Cart() {
  const cart=useSelector((store)=>store.cart.items)
  console.log(cart)
 const VegCard=highOrder(Card)
const dispatch=useDispatch()
 const handleClick=()=>{
dispatch(clearCart())
 }
 const handleminus=(id)=>{
  console.log(id)
  dispatch(removeItem(id))
   }
  return cart.length===0?(<h1>No Restaurant Found!!!</h1>):
(<>
<button onClick={handleClick}>clear cart</button>
  <div className='grid-container'>
    {        cart.map((card)=>{
        return (
          <div >
            <Link key={card?.info?.id} to={`/Restaurants/${card?.info?.id}`} className="card-link"> Go to Restraunt</Link>
              {card.info.veg ? <VegCard {...card} /> : <Card {...card} />}
            <button onClick={()=>handleminus(card?.info?.id)}>-</button>
          </div>
        );
  })
  }
  </div>
  </>
)

}

export default Cart






