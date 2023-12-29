import './App.css';
import NewsWebApp from './NEWS/NewsWebApp';


function App() {
   const apiKey =process.env.REACT_APP_NEWS_API
   
  return (
    <div>
     <NewsWebApp apiKey={apiKey} />
    </div>
  );
}

export default App;
