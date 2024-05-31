import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from 'react';
// import axios from "axios";
import axios from 'axios';
import Cards from "./Cards";


function Freebook() {

const [book,setBook] = useState([]);
useEffect(() => {
const getBook = async() => {
try{
const res = await axios.get("http://localhost:4001/book");
console.log(res.data);

const data=res.data.filter((data) => 
  data.category === "Free");
setBook(data);


}
catch(error){
console.log(error);

}
} 
getBook();
},[]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      
        centerPadding: "20px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-10 px-4 dark:bg-dark-bg bg-light-bg pt-10 dark:text-white transition duration-500 ease-in-out">
      <div className=''>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
          corporis nulla non suscipit, iure neque earum?
        </p>
      </div>

     
      <div className='md:flex-col flex-row '>
      <Slider {...settings}>
       {book.map((item) => (
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
      </div>
      </div>
      </>
  )
}

export default Freebook