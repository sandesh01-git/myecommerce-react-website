import React from 'react'
import aboutimg from "./Assets/assests12.jpg"
import "../Components/blog.css"
import Foter from './Foter';

function About() {
  return (
    <>
     <section id="about">
    <div className="container">
      <div className="about-title">
        <h1 >About Us</h1>

      </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            
            <div className="content">
              <div className="article">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus, labore ex sint hic distinctio
                  expedita facilis voluptatibus iusto explicabo eaque tempore mollitia quo accusantium vitae, nobis
                  molestias nemo iste?</h3>
  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quam maxime, sed iste deleniti
                  molestias nemo? Labore eius eligendi cumque eaque in sed eum quae? Iusto nulla nobis quibusdam
                  accusantium!</p>
                 
              </div>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="content-img">
             <img src= {aboutimg}/>
            </div>
            
          </div>
        
        </div>
   
    </div>

    <div className="container mt-5">
      <div className="about-title">
        <h1 className="pb-1">Our Mission</h1>

      </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 order-2">
            
            <div className="content">
              <div className="article">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus, labore ex sint hic distinctio
                  expedita facilis voluptatibus iusto explicabo eaque tempore mollitia quo accusantium vitae, nobis
                  molestias nemo iste?</h3>
  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quam maxime, sed iste deleniti
                  molestias nemo? Labore eius eligendi cumque eaque in sed eum quae? Iusto nulla nobis quibusdam
                  accusantium!</p>
               
              </div>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 order-1">
            <div className="content-img">
             <img src={aboutimg}/>
            </div>
            
          </div>
        </div>
   
    </div>
  </section>

  <Foter />
    </>
  )
}

export default About