import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./header.css";
import Banner from "./Banner";
import Cards from "./Cards";

export default () => {
  const [sliderRef] = useKeenSlider({});

  const slideImages = ["image1.png", "image2.png", "image3.png"];

  return (
    <div className="heading">
      <div
        className=" navbar flex flex-row gap-32  "
        style={{
          position: "relative",
        }}
      >
        <div className="logo ml-10" style={{ marginTop: 10 }}>
          <img src="logo.svg" alt="logo"></img>
        </div>
        <div className="navbar-menu justify-content-center text-lg font-medium flex flex-row gap-20 mt-4">
          <p>Home</p>
          <p>Services</p>
          <p>Pages</p>
          <p>Shop</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <a
          href="#"
          class="btn btn-primary bg-black   text-center"
          style={{ width: 170, height: 52, paddingto: "15 " }}
        >
          Go somewhere
        </a>
      </div>

      <div>
        <div
          ref={sliderRef}
          className="keen-slider duration-75 ease-in"
          style={{ position: "relative", transition: " 0.1", ease: 0 }}
        >
          <div
            className="keen-slider__slide number-slide1 "
            style={{ width: " 100%" }}
          >
            <img src="image1.png" />
          </div>
          <div
            className="keen-slider__slide number-slide2 "
            style={{ width: " 100%" }}
          >
            <img src="image2.png" />
          </div>
          <div
            className="keen-slider__slide number-slide3 "
            style={{ width: "100%" }}
          >
            <img src="image3.png" />
          </div>
        </div>
        <div
          className=" ml-10 font-medium text-yellow-400"
          style={{ position: "absolute", top: "30%" }}
        >
          <p>COMPLETE SOLUTION FOR YOUR ROOFING VISION</p>
        </div>
        <div
          className=" ml-10  font-bold text-white "
          style={{
            position: "absolute",
            top: "40%",
            width: 868,
            fontSize: 80,
            lineHeight: 1,
          }}
        >
          <p>Export Roofing and Fixing Service</p>
          <div
            className=" text-2xl  font-normal "
            style={{ marginRight: 200, marginBottom: 50 }}
          >
            <p>
              hello unbwdjh hgdfhgw jhqgdcyqwe hgsdfgw ghwfdcgw xhwg jhdvqwehg{" "}
            </p>
          </div>
          <div className="text-lg ">
            <a
              href="# "
              class=" btn text-lg py-3 px-[44px] text-black font-bold text-center"
              style={{
                width: 220,
                height: 65,
                marginRight: 20,
                backgroundColor: "yellow",
              }}
            >
              Book A Schedule
            </a>
            <a
              href="# "
              class=" btn  text-lg py-3 px-[44px] text-black font-bold text-center"
              style={{ width: 220, height: 65, backgroundColor: "White" }}
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
