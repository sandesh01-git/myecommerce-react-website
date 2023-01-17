import React from "react";
import { Link } from "react-router-dom";

import { GridImages } from "../Components/constants/images";
import { cardData } from "../data/cardData";
import { carouselImages } from "./constants/images";

function Blog() {
  
  
  return (
    <>
      <div class="title-product mt-5">
        <h1
          className="text-center"
          style={{ fontsize: "20px", color: "#3e3377" }}
        >
          Feature Product
        </h1>
      </div>
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-lg-12  p-0 left-product">
                  <div className="first-prodcut-wrap">
                    <div className="title">
                      <h4>New Products</h4>
                    </div>

                    <div className="row product-wrap">
                      <div className="col-lg-3">
                        <div className="img-wrapper py-2">
                          <img src={GridImages.GridImages1} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 product-text">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>$22.00</p>
                        <div className="icons">
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="first-prodcut-wrap">
                    <div className="row product-wrap">
                      <div className="col-lg-3">
                        <div className="img-wrapper py-2">
                          <img src={GridImages.GridImages2} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 product-text">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>$22.00</p>
                        <div className="icons">
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star "></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="first-prodcut-wrap">
                    <div className="row product-wrap">
                      <div className="col-lg-3">
                        <div className="img-wrapper py-2">
                          <img src={GridImages.GridImages3} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 product-text">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>$22.00</p>
                        <div className="icons">
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="first-prodcut-wrap">
                    <div className="row product-wrap">
                      <div className="col-lg-3">
                        <div className="img-wrapper py-2">
                          <img src={GridImages.GridImages4} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 product-text">
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <p>$22.00</p>
                        <div className="icons">
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star "></i>
                          <i className="fa fa-star "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12  p-0 left-product">
                  <div className="title text-center ">
                    <h4 className="fw-bold">Simmilar Blog</h4>
                  </div>
                  {cardData?.map((data, i) => {
                    
                    return (
                      <div className="first-prodcut-wrap">
                        <div className="row product-wrap">
                          <div className="col-lg-3">
                            <div className="img-wrapper py-2">
                              <img src={data?.image} alt="" />
                            </div>
                          </div>
                          <div className="col-lg-9 secondside">
                            <h5>{data?.title} </h5>
                            <p>
                              <Link
                                to="/readmore"
                                  state={{ Msg: data.id }}
                                  // state and msg can be any thing 
                                className="linkgo"
                              >
                                {" "}
                                Readmore
                              </Link>
                            </p>
                            {/* <p onClick={handledata(data.id)}>
      Read More
      </p> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-8 blogmain">
              <div class="container mt-3">
                <div class="title-wrap d-flex justify-content-between">
                  <h2>Christmas Sale is here</h2>
                  <div
                    class="date d-flex justify-content-between"
                    style={{ width: "30%" }}
                  >
                    <p class="fw-bolder fs-5">
                      <i class="fa fa-user"> User log </i>
                    </p>
                    <p class="fw-bolder fs-5">
                      <i class="fa fa-calendar"> Jan 2023</i>
                    </p>
                  </div>
                </div>
                <div class="row image-roow">
                  <div class="col-lg-12">
                    <div class="img-wrap d-flex justify-content-center">
                      <img
                        src={carouselImages.sliderImage1}
                        style={{
                          objectFit: "cover",
                          maxWidth: "100%",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="container py-4 description">
                  <div class="about-image">
                    <p>
                      Vegetables are an essential part of a healthy diet,
                      providing a variety of vitamins, minerals, and fiber. They
                      come in many different colors, shapes, and sizes, and are
                      enjoyed both raw and cooked
                    </p>
                  </div>
                  <div class="sample-ul py-3">
                    <h4>Sample Unordered List</h4>
                    <ul class="list-item">
                      <li class="item">
                        Comodous in tempor ullamcorper miaculis
                      </li>
                      <li class="item">
                        Pellentesque vitae neque mollis urna mattis laoreet.
                      </li>
                      <li class="item">Divamus sit amet purus justo.</li>
                      <li class="item">
                        Proin molestie egestas orci ac suscipit risus posuere
                        loremou.
                      </li>
                    </ul>
                  </div>
                  <div class="sample-ul py-3">
                    <h4>Sample Unordered List</h4>
                    <ol class="listitem-ol">
                      <li class="item">
                        Comodous in tempor ullamcorper miaculis
                      </li>
                      <li class="item">
                        Pellentesque vitae neque mollis urna mattis laoreet.
                      </li>
                      <li class="item">Divamus sit amet purus justo.</li>
                      <li class="item">
                        Proin molestie egestas orci ac suscipit risus posuere
                        loremou.
                      </li>
                    </ol>
                  </div>
                  <div class="sample-text py-3">
                    <h4>Sample Unordered List</h4>
                    <p>
                      Vegetables are an essential part of a healthy diet,
                      providing a variety of vitamins, minerals, and fiber. They
                      come in many different colors, shapes, and sizes, and are
                      enjoyed both raw and cooked. Eating a variety of
                      vegetables can help to ensure that you are getting all the
                      essential nutrients your body needs.
                    </p>
                  </div>

                  <div class="sample-text py-3">
                    <h4>Sample ordered List</h4>
                    <p>
                      Vegetables are an essential part of a healthy diet,
                      providing a variety of vitamins, minerals, and fiber. They
                      come in many different colors, shapes, and sizes, and are
                      enjoyed both raw and cooked. Eating a variety of
                      vegetables can help to ensure that you are getting all the
                      essential nutrients your body needs.
                    </p>
                  </div>
                  <div class="icons">
                    <a href="# ">
                      <i class="fa fa-facebook"></i>{" "}
                    </a>
                    <a href="# ">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="# ">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="# ">
                      <i class="fa fa-youtube"></i>
                    </a>
                    <a href="# ">
                      <i class="fa fa-google"></i>
                    </a>
                    <a href="# ">
                      <i class="fa fa-yahoo"></i>
                    </a>
                    <a href="# ">
                      <i class="fa fa-snapchat-ghost"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
