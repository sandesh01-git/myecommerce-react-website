import React from 'react'
import { Link } from "react-router-dom";
function Login() {
  return (
    <>

<section id="form">
    <div className="login-box">
     
      <form>
        <h1>LOGIN</h1>
        <label>Email</label>
        <input type="email" placeholder="Enter e-mail" required/>
        <div className="valid-feedback">Valid.</div>
        <label>Password</label>
        <input type="password" placeholder=" Enter Password Please"/>
        <button type="submit" value="submit" class="button3"> Submit</button>
      </form>
      <p className="formp"> By clicking sign up <br/>
      <a href="#">Terms and condition</a> and   <a href="#">Privacy Policy</a> 
    </p>
    </div>
    <p className="formpa">Already have an account<Link to="/Signup"> Signup</Link> </p> 
  </section>
      </>
  )
}

export default Login