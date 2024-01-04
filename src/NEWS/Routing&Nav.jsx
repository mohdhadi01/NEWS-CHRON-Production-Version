import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NewsWebApp from '../NEWS/NewsWebApp';
import backgroundImage from "../Assets/background.jpg";
import ClickedNews from "./ClickedNews";
import NewsPopup from './NewsPopup';

function RoutingNav(props) {
    const apiKey=props.apiKey;
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  return (
    <div>
      
    <Routes>
      <Route path='/Newspop' element={<NewsPopup apiKey={apiKey}/>}></Route>
      <Route path="/header" element={<ClickedNews apiKey={apiKey} />}></Route>
        <Route path='/Home' element={<NewsWebApp apiKey={apiKey} />}></Route>
     </Routes>
    </div>
  )
}

export default RoutingNav