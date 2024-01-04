import {React,useEffect,useState,useRef} from 'react'
import "../NEWS/NewsWebApp.css"
import logo from "../Assets/logo.png";
import search from "../Assets/search.png";
import Footer from './Footer';


function ClickedNews(props) {
    const APIKEY = props.apiKey;
  const [searchTerm, setSearchTerm] = useState("earth");
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
        </header>
        <Footer/>
        </div>
        </div>
        
  )
}

export default ClickedNews