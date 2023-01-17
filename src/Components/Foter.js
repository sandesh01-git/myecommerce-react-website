import React from 'react'
import "../Components/blog.css"

function Foter() {
  return (
    <>


  <section id="futter">
 <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="product">
          <p className="fw-bolder fs-4">Store</p>
          <ul className="list-unstyled">
            <li>
              <a href="vegie.html">Veg-Item</a>
            </li>
            <li> <a href="meats.html">Non-Veg-Item</a></li>
            <li> <a href="#">Drinks</a></li>
            <li> <a href="#">Diary</a></li>
            <li> <a href="#">Kitchen</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="Resources">
          <p className="fw-bolder fs-4">Company</p>
          <ul className="list-unstyled">
            <li><a href="about.js">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Special Offers</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="support">
          <p className="fw-bolder fs-4">Information</p>
          <ul className="list-unstyled">
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Secure Payment</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          
            <li><a href="#">FAQS</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="compare">
          <p className="fw-bolder fs-4">Newsletter Subscription</p>
         <form className="newsletter-form" action="#">
              <input className="form-control" type="text" id="email" placeholder="Your email address"/>
              <button className="btn btn-success "
                type="submit" >Subscribe</button>
            </form>
        </div>
      </div>
      <div class="copyright">

            <div class="container mt-2">
                <p>Developed by SanGroups Nepal</p>
            </div>
        </div>
    </div>
  </div>
  </section>
 

    </>
  )
}

export default Foter