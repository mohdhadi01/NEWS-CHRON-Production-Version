import React, { useRef,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../NEWS/MainNews.css";
import DateLogo from "../Assets/DateLogo.png";
import next from "../Assets/nextArrow.png";
import previous from "../Assets/previousLogo.png";
import { ExportOutlined } from "@ant-design/icons";


function MainNews(props) {
  const [iValue,setIValue]=useState() 
  const newsList = props.passJsonData;
  const refHii = useRef(null);
  const scrollLength = "58";
  let currentvalue = 0;

  const filteredNews = newsList.filter(
    (news) => news.title != null && news.image_url != null
  );

  function ShiftNews() {
    let translatedistance = -currentvalue * scrollLength;
    refHii.current.style.transform = `translateY(${translatedistance}vh)`;
  }
  function nextClick() {
    if (currentvalue < filteredNews.length - 1) {
      currentvalue++;
      ShiftNews();
    }
    if (currentvalue === filteredNews.length - 1) {
      currentvalue = 0;
      ShiftNews();
    }
    
  }
 
  const startAutoSlide = () => {
    return setInterval(() => {
      if (currentvalue < filteredNews.length - 1) {
        currentvalue++;
        ShiftNews();
      } else {
        currentvalue = 0;
        ShiftNews();
      }
    }, 3000); 
  };
  useEffect(() => {
    let autoSlide = startAutoSlide();
    return () => {
      clearInterval(autoSlide);
    };
  }, [newsList]);



  function prevClick() {
    if (currentvalue > 0) {
      currentvalue--;
      ShiftNews();
    }
    if (currentvalue === 0) {
      currentvalue = filteredNews.length - 1;
      ShiftNews();
    }
  }

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="hii" ref={refHii}>
      {filteredNews.map((news, i) => {
        if (news.title != null && news.image_url != null) {
          const titleWords = news.title.split(" ");
          const shortTitle = titleWords.slice(0, 16).join(" ");

          return (
            <>
              <div key={i} className="mainScreen" >
                <img
                  className="mainImage"
                  key={i}
                  src={news.image_url}
                  alt=""
                />
                ;
                <div className="details">
                  <div className="heading">
                    <h5 className="Date">
                      {" "}
                      <img className="DateLogo" src={DateLogo} alt="" />
                      {formatDate(news.pubDate)}
                    </h5>

                    <h5 className="creator">
                      {news.creator} <br />
                    </h5>
                  </div>
                  <div className="textDetail"> 
                    <h2 className="title">{shortTitle}"</h2>
                    <p className="Description">{news.description}</p>
                  </div>
                  

                  <div className="control">
                    <img
                      onClick={prevClick}
                      className="prev"
                      src={previous}
                      alt=""
                    />
                   <h5 onClick={()=>props.setIValue(i)} className="Readmore ">Read more... <ExportOutlined /></h5>
                    <img
                      onClick={nextClick}
                      className="next"
                      src={next}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default MainNews;
