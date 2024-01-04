import "./App.css";
import RoutingNav from "./NEWS/Routing&Nav";

function App() {
  //  const apiKey =process.env.REACT_APP_NEWS_API
  // const apiKey ="pub_347817b7acdf7abf975217c7bd7e9ee528a91";
  // const apiKey = "pub_35663c56160088f526ca780e573158d642c11";
  const apiKey = "pub_35682397984351476bcec626b55a899a8eef9";
  return (
    <div>
      <RoutingNav apiKey={apiKey} />
    </div>
  );
}

export default App;
