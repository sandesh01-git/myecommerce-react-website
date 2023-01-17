import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { cardData } from '../data/cardData';

function Readmore() {
    
    const [dataid, setdataid] = useState(null)
    let location=useLocation()
    // location dekhaunxa path haru
   useEffect(() => {
    
    
    setdataid(location.state.Msg);
    //  state  chai tyai hhun yess msg or sandesh rakhna ni milxa
   }, [])  
   
  return (
    <>
    
 


    <section id='readmore'>
      
<div className="container">

  
  
        {
        cardData.map((san)=>
           san.id==dataid ?
         <div className="cardtitle_read">
           <h1 >{san.title}</h1>
           <img src={san.image} alt=''  className='rounded mx-auto d-block'/>
           <div className="cardbody">
               <p className='text-center'> { san.desc}</p>
           </div>
       </div>
       :null
           
          
        )}

     
  

</div>


       

    </section>

    </>
  )
}

export default Readmore