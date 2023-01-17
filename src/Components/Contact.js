import React, {useState} from 'react'
import "../Components/blog.css"
import Foter from './Foter'

function Contact() {

const [user, setUser] = useState({
  email: "",
   fullname: "", 
   mobile: "", 
   Comments: ""
});



const handleInputs = (e) =>{
const {name,value}=e.target;
  setUser({...user, [name]:value});

}




const handleSubmit=(e)=>{
  e.preventDefault();
 console.log(e);
 
  setUser({ email: "",
  fullname: "", 
  mobile: "", 
  Comments: ""})

};




  return (
    <>


      <section id="form">
        <div  className="contact-box">
          <h1>GET IN TOUCH</h1>



          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter e-mail" required  
            value={user.email}
            onChange = {handleInputs}
            />
            
            <label>Name</label>
            <input type="name" name="fullname" placeholder=" Enter Full Name" required  
            value={user.fullname}
            onChange = {handleInputs}
            />
            <label>Mobile</label>
            <input type="text" name="mobile" placeholder="Enter mobile Number" autocomplete="off"  className="form-control" required
            value={user.mobile}
            onChange = {handleInputs}
            />

            <label for="comment">Message</label>
            <textarea  className="form-control" rows="2" id="comment" name="Comments" placeholder="Leave a message" required value={user.Comments}
             onChange = {handleInputs}>
              
            </textarea>
            <input type="hidden" name="_template" value="table" />
            <button type="submit"  className="button3"> Send</button>
          </form>
        </div>
      </section>

     
<Foter/>
    </>
  )
}

export default Contact