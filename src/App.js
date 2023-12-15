import './App.css';
import NewsWebApp from './NEWS/NewsWebApp';


function App() {
  //  const apiKey =process.env.REACT_APP_NEWS_API
  const apiKey ="pub_347817b7acdf7abf975217c7bd7e9ee528a91"
   
  return (
    <div>
     <NewsWebApp apiKey={apiKey} />
    </div>
  );
}

export default App;
