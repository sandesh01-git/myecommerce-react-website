import React from 'react'
import { Link } from "react-router-dom";
function Signup() {

 
  return (
    <>

<section id="form">
    <div className="signup-box mt-5">
      
      <form>
        <h1>SIGN UP</h1>
        <label>First Name</label>
        <input type="text" placeholder=" Enter First Name"/>
        <label>Last Name</label>
        <input type="text" placeholder=" Enter Last Name"/>
        <label>Email</label>
        <input type="email" placeholder=" Email...Please" required/>
        <label>Password</label>
        <input type="password" placeholder=" Password Please"/>
        <label>Re-Password</label>
        <input type="password" placeholder=" Oopss Sorry Type Password Again"/>
        <button type="submit" value="submit"  className="button3"> Submit</button>
      </form>
      <p  className="formp"> By clicking sign up <br/>
      <a href="#">Terms and condition</a> and   <a href="#">Privacy Policy</a> 
    </p>
    </div>
    <p  className="formpa">Already have an account<Link to="/Login"> Login</Link></p>
  </section>




    </>
  )
}


export default Signup