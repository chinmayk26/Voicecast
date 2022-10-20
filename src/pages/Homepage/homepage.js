import React from 'react';
import './homepage.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { dataAudioRoom } from '../../data/Audiodata';
import { dataLiveRoom } from '../../data/liveroomdata';
import { dataVideoBooks } from '../../data/videodata';
  
const Home = () => {
  const slides = [
    {url: "https://www.wallpapertip.com/wmimgs/41-410029_download-src-most-popular-4k-resolution-wallpaper-4k.jpg", 
     title: "Beach"},
    {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98IS1aMhd8DB0U0kXIzv2dijr891YZTjnHHya3m9gE72EfhJx5pRfNY2SlvbdGH79U70&usqp=CAU", 
     title: "Beach"},
    {url: "https://ai-s1.infcdn.net/screenshots_siandroid/1/11579/11579970_2.jpg", 
     title: "Beach"},
    {url: "https://wallpaperaccess.com/full/208107.jpg", 
     title: "Beach"},
    {url: "https://images3.alphacoders.com/769/thumb-1920-769825.jpg", 
    title: "Beach"}
  ];

  const containerStyles ={
    padding: "10px",
    width: "1517px",
    height: "500px",
    margin: "0 auto",
  };

  const body ={
    background: "#ccc",  
  };

  const Card = {
    border: "1px solid #fff",
    backgroundColor: "black",
    borderRadius: "8px",
    overflow: "hidden",
    height: "400px",
    color: "#fff",
    cursor: "pointer",
  };

  const h1 ={  
    fontSize: "0.9rem",
    margin: "20px",
  };

  const img={
      width: "100%",
      height: "200px",
      objectFit: "cover",
      background: "black",
  };

  const size={
    width: "95%",
    margin: "0 auto",
    marginTop: "50px",
};

const textb={
  margin: "10px 20px",
};

const head={
  textAlign: "center",
  paddingTop: "20px",
  paddingBottom: "10px",
  paddingRight: "0px",
  paddingLeft: "0px",
};

const audio={
  textAlign: "center",
  paddingTop: "30px",
  paddingBottom: "0px",
  paddingRight: "0px",
  paddingLeft: "0px",
};

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <body style={body}>
    <div>
      <h1 style={head}>Our Latest Collection</h1>
      <div style ={containerStyles}>
        <ImageSlider slides ={slides}/>
      </div>

      {/* Audio Books */}
      
      <div style={audio}>
      <h1 style={head}>Audio Books</h1>
      </div>

      <div style={size}>
      <Slider {...settings}>
      
      {dataAudioRoom.map(item=>(
        <div style= {Card}>
        <div classname= "card-top">
          <img src={item.linkImg} style={img} alt={item.title}/>
          <h1 style={h1}>{item.title}</h1>
        </div>
        <div classname= "card-bottom" style={textb}></div>
        <h3>{item.price}</h3>
        <p className="category">{item.category}</p>
      </div>
      ))}
      </Slider>
      </div>
      
      {/* Video Books */}
      
      <div style={audio}>
      <h1 style={head}>Audio Books</h1>
      </div>

      <div style={size}>
      <Slider {...settings}>
      
      {dataVideoBooks.map(item=>(
        <div style= {Card}>
        <div classname= "card-top">
          <img src={item.linkImg} style={img} alt={item.title}/>
          <h1 style={h1}>{item.title}</h1>
        </div>
        <div classname= "card-bottom" style={textb}></div>
        <h3>{item.price}</h3>
        <p className="category">{item.category}</p>
      </div>
      ))}
      </Slider>
      </div>
      
      {/* Live Room */}
      
      <div style={audio}>
      <h1 style={head}>Live Rooms</h1>
      </div>
      <div style={size}>
      <Slider {...settings}>
      
      {dataLiveRoom.map(item=>(
        <div style= {Card}>
        <div classname= "card-top">
          <img src={item.linkImg} style={img} alt={item.title}/>
          <h1 style={h1}>{item.title}</h1>
        </div>
        <div classname= "card-bottom" style={textb}></div>
        <h3>{item.price}</h3>
        <p className="category">{item.category}</p>
      </div>
      ))}
      </Slider>
      </div>
    </div>
    </body>
  );
};
  
export default Home;