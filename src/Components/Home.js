import React, { useEffect, useState } from 'react'
import "../Components/blog.css"
import{Link} from"react-router-dom";
import { carouselImages } from './constants/images';
import { Carousel } from 'react-bootstrap';
import { cardImages } from "./constants/images";
import { swiperImages } from "./constants/images";
import { CardsImages } from "./constants/images";
import { ojudiImages} from "./constants/images";

import Foter from './Foter';
import { cardData } from '../data/cardData';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [time, setTime] = useState({ day: "", hour: '', min: "", second: "" });

  const goToTop=()=>{
    window.scrollTo({
top:0,
behavior:'smooth'
    });

 }

  // const CardInfo = () => [

  // {images:"", title:"", text:""},
  // {images:"", title:"", text:""},
  // {images:"", title:"", text:""},
  // {images:"", title:"", text:""},

  // ];

  // const renderCard = (card,index) =>{
  //   return (
  //     <Card style={{ width: '18rem' }} className="box">
  //     <Card.Img variant="top" src={} />
  //     <Card.Body>
  //       <Card.Title>{}</Card.Title>
  //       <Card.Text>
  //       {}
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   );

  // };

  const newyear = "01/18/2023"

  function timeCountDown() {

    const nowDate = new Date();
    const newYearDate = new Date(newyear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 / 24) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;



  }
  function formatTime(time) {
    return time
    // return time >10 ? time :`0${time}`;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const nowDate = new Date();
      const newYearDate = new Date(newyear);
      const totalSeconds = (newYearDate - nowDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600 / 24) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;
      setTime({ day: days, hour: hours, min: minutes, second: seconds })
    }, 1000);
    return () => clearInterval(interval)


  }, [])
  setInterval(timeCountDown, 1000);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 2000,
    autoplay:true,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  const slides = [swiperImages.SwiperImage1, swiperImages.SwiperImage2, swiperImages.SwiperImage3, swiperImages.SwiperImage4, swiperImages.SwiperImage5]
  return (
    <>

      <Carousel >
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={carouselImages.sliderImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='heading1'>Organic Farm</h3>
            <p className='paragraph1'>Get fresh Food from our farm to your table</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={carouselImages.sliderImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='heading2'>Fresh And nature</h3>
            <p className='paragraph2'>Get fresh Food from our farm to your table</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>


      <section id="card3">
        <div className="container mt-1">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
              <a href="/">
                <div className="card1">
                  <img className="card-img-top" src={CardsImages.CardsImages1} alt="Card image" />
                  <div className="card-body">
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
              <a href="#">
                <div className="card1">
                  <img className="card-img-top" src={CardsImages.CardsImages2} alt="Card image" />
                  <div className="card-body">
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
              <a className href="#">
                <div classNames="card1">
                  <img className="card-img-top" src={CardsImages.CardsImages3} alt="Card image" />
                  <div className="card-body">
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <a className href="#">
                <div classNames="card1">
                  <img className="card-img-top" src={CardsImages.CardsImages4} alt="Card image" />
                  <div className="card-body">
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <a href="#">
                <div className="card1">
                  <img className="card-img-top" src={CardsImages.CardsImages5} alt="Card image" />
                  <div className="card-body">
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="card2 ">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="featured-item">
                <div className="icon">
                  <img src={cardImages.CardImage1} alt="Image" />
                </div>
                <div className="featured-info">
                  <h4 className="title">Free Shipping</h4>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="featured-item">
                <div className="icon">
                  <img src={cardImages.CardImage2} alt="Image" />
                </div>
                <div className="featured-info">
                  <h4 className="title">Free Shipping</h4>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="featured-item">
                <div className="icon">
                  <img src={cardImages.CardImage4} alt="Image"  className=''/>
                </div>
                <div className="featured-info">
                  <h4 className="title">Free Shipping</h4>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="featured-item">
                <div className="icon">
                  <img src={cardImages.CardImage4} alt="Image" />
                </div>
                <div className="featured-info">
                  <h4 className="title">Free Shipping</h4>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section>
        <div className="container mt-5">
          <Slider {...settings}>
            {slides?.map((slide, i) => {
              return <div><img src={slide} class="slide_img " style={{width:"100%",height:"auto"}}/></div>
            })}


          </Slider>
        </div>
      </section>
      {/* 
  <section>
    <div className="container mt-5">
    {CardInfo.map(renderCard)}
    </div>
  </section> */}

      <section id='promo'>
        <div className="container-fluid mt-1 mb-5">
          
            <div className=" timerbody">
              <h1 className='text-center text-uppercase'>Flash sale offer in</h1>
              <div className="cd_timer">
                <div className="cd_container">
                  <div className="time day">{time?.day}</div>
                  <span className='time_text'>Days</span>
                </div>

                <div className="cd_container">
                  <div className="time hour">{time?.hour}</div>
                  <span className='time_text'>Hours</span>
                </div>

                <div className="cd_container">
                  <div className="time minute">{time?.min} </div>
                  <span className='time_text'>Minutes</span>
                </div>

                <div className="cd_container">
                  <div className="time day">{time?.second} </div>
                  <span className='time_text'>Seconds</span>
                </div>
              </div>
            </div>
        
        </div>
      </section>


<section id='slidercardtime'>
  <div className="container App mt-3 mb-3">
  
<Slider  {...settings} >
{ cardData.map((item) => (

<div className="card">
 <div className="card-top">
   <img src= {item.image} alt="Images" />
   <h1>{item.title}</h1>
 </div>
 <div className="card-bottom">
<div className='price_container'><h2> $400</h2>  <h3>{`$${item.price}`}</h3></div>
 <button>   <Link
                                to="/cart"
                                  state={{ Msg: item.id }}
                                  // state and msg can be any thing 
                                className="linkgo"
                              >
                                {" "}
                                Add to cart
                              </Link> </button>
 </div>
</div> 
))}
     </Slider>
    
    
  
  </div>

</section>


  <section id="card3">
<div className="container">
  <div className="row ">
  <div className="col-md-4 col-lg-4 c0l-sm-12  neupane">
      <div className="img-wrapper mt-2">
        <img className="card-img-top" src= {ojudiImages.ojudiImages2}  alt="Card image"/>
      </div>
      
      <div classNames="card-body cardhover">
      </div>
    </div>
    <div className="col-md-4 col-lg-4 c0l-sm-12 m neupane">
      <div className="img-wrapper mt-2">
        <img className="card-img-top" src= {ojudiImages.ojudiImages1}  alt="Card image"/>
      </div>
      
      <div className="card-body cardhover">
      </div>
    </div>
    <div className="col-md-4 col-lg-4 c0l-sm-12  neupane">
      <div className="img-wrapper mt-2">
        <img className="card-img-top" src={ojudiImages.ojudiImages3} alt="Card image"/>
      </div>
      
      <div className="card-body cardhover">
      </div>
    </div>

  </div>
</div>
</section>

<a onClick={goToTop} class="snap">
  TOP
</a> 

<Foter />
    </>
  )
}

export default Home