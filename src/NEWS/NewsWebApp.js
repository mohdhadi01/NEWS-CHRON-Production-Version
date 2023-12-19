import React, { useEffect, useRef, useState } from "react";
import "../NEWS/NewsWebApp.css";
import logo from "../Assets/logo.png";
import search from "../Assets/search.png";
import NewsCatalog from "./NewsCatalog";
import arrow from "../Assets/down-arrow.gif";
import MainNews from "./MainNews";
import backgroundImage from "../Assets/background.jpg";

function NewsWebApp(props) {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  const APIKEY = props.apiKey;
  const [searchTerm, setSearchTerm] = useState("Gta 6");
  // const apiURL = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-12-09&to=2023-12-09&sortBy=popularity&apiKey=${APIKEY}`;
  const apiURL = `https://newsdata.io/api/1/news?apikey=${APIKEY}&q=${searchTerm}`;
  const [newsList, setNewsList] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const reponse = await fetch(apiURL);
        const jsonData = await reponse.json();

        setNewsList(jsonData.results);
        console.log(jsonData);
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

  return (
    <div className="mainContainer">
      <div className="content-box">
        <header>
          <img className="logo" src={logo} alt="NEWS-CHRON" />
          <div className="searchRow">
            <h1>Latest News</h1>
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
        <main>
          <div className="desc-Box">
            <MainNews passJsonData={newsList} />
          </div>
          <div className="title-Box">
            <NewsCatalog passJsonData={newsList} />
            <img className="downarrow" src={arrow} alt="" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewsWebApp;
