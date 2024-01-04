import React, { useEffect, useRef, useState } from "react";
import "../NEWS/NewsWebApp.css";
import logo from "../Assets/logo.png";
import search from "../Assets/search.png";
import NewsCatalog from "./NewsCatalog";
import MainNews from "./MainNews";
import Footer from "./Footer";
import NewsPopup from "./NewsPopup";


function NewsWebApp(props) {
  const APIKEY = props.apiKey;
  const [searchTerm, setSearchTerm] = useState("sci fi");
  // const apiURL = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-12-09&to=2023-12-09&sortBy=popularity&apiKey=${APIKEY}`;
  const apiURL = `https://newsdata.io/api/1/news?apikey=${APIKEY}&q=${searchTerm}`;
  const [newsList, setNewsList] = useState([]);
  const searchRef = useRef(null);
  const descBoxRef = useRef()
  const titleBoxRef = useRef()
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [iValue,setIValue]=useState()
  const [Iloaded,setIloaded]=useState(false);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const reponse = await fetch(apiURL);
        const jsonData = await reponse.json();
        setNewsList(jsonData.results);
        setNewsLoaded(true);
      } catch (e) {
        console.log(e, "Error Occured");
      }
    }
    fetchAPI();
  }, [searchTerm, apiURL]);

  function handleSearch(event) {
    event.preventDefault();
    const searchValue = searchRef.current.value;
    setSearchTerm(searchValue);
  }

  function handleCategory(event) {
    const selectedCategory = event.target.value;
    setSearchTerm(selectedCategory);
  }

  useEffect(() => {
    if (iValue != null) {
      setIloaded(true);
    }
  }, [iValue]);

    

  return (
    <div className="mainContainer">
      <div className="content-box">
        <header>
          <img className="logo" src={logo} alt="NEWS-CHRON" />
          <div className="searchRow">
            <h1 className="latest">Latest News</h1>
            <div className="input-line">
              <form action="" onSubmit={handleSearch}>
                <input className="search-bar" type="text" ref={searchRef} />
              </form>
              <img
                src={search}
                className="search-icon"
                alt=""
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="News-category">
            <button
              className="typeMenu"
              value="Sports"
              onClick={handleCategory}
            >
              Sports
            </button>
            <button className="typeMenu" value="Arts" onClick={handleCategory}>
              Arts
            </button>
            <button
              className="typeMenu"
              value="Business"
              onClick={handleCategory}
            >
              Business
            </button>
            <button
              className="typeMenu"
              value="Science"
              onClick={handleCategory}
            >
              Science
            </button>
            <button className="typeMenu" value="Tech" onClick={handleCategory}>
              Tech
            </button>
            <button
              className="typeMenu"
              value="health"
              onClick={handleCategory}
            >
              Health
            </button>
            <button
              className="typeMenu"
              value="gaming"
              onClick={handleCategory}
            >
              Gaming
            </button>
          </div>
        </header>

        <div className="popupContainer">
        {newsLoaded && Iloaded && <NewsPopup passJsonData={newsList} iValue={iValue}/>}
        </div>
        <main>
          <div className="desc-Box" ref={descBoxRef}>
            <MainNews passJsonData={newsList} setIValue={setIValue} />
          </div>
          <div className="title-Box" ref={titleBoxRef}>
            <NewsCatalog passJsonData={newsList} setIValue={setIValue}/>
            {/* ---------------------- */}
          </div>
         
        </main>
        
        {/* <div className="popupContainer">
        {newsLoaded && Iloaded && <NewsPopup passJsonData={newsList} iValue={iValue}/>}
        </div> */}
        <Footer/> 
      </div>
    </div>
  );
}

export default NewsWebApp;
