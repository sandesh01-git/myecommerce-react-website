

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { cardData } from '../data/cardData';
function Cart() {


    
    const [dataid, setdataid] = useState(null)
    const [quantity, setquantity] = useState(0)
    let location=useLocation()


  
   useEffect(() => {
    
    
    setdataid(location.state.Msg);

   }, [])  
   
  return (
    <section id='readmore'>
      
<div className="container">

  
  
        {
        cardData.map((san)=>
           san.id==dataid ?
         <div className="cardtitle_read">
           <h1 >{san.title}</h1>
           <img src={san.image} alt=''  className='rounded mx-auto d-block'/>
           <div className="cardbody mx-5">
           <button  className='btn btn-outline-primary' onClick={()=>setquantity(quantity+1)}>+</button>
               <p className='text-center'> {`${san.price * quantity} `}</p>
               <p>{quantity}</p>
               
               <button className='btn btn-outline-primary' onClick={()=>setquantity(quantity-1)}
>-</button>
               <button className='btn btn-outline-success'>Buy Now</button>
               <button className='btn btn-outline-danger'>delete cart</button>
           </div>
       </div>
       :null
           
          
        )}

     
  

</div>


       

    </section>
  )
}

export default Cart