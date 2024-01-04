import { React, useEffect, useRef, useState } from 'react'
import "./NewsPopus.css"
import { CloseOutlined } from '@ant-design/icons';

function NewsPopup(props) {
  const showNewsRef = useRef(null);
  const iValue = props.iValue;
  const [myValue,setMyValue]=useState(iValue)
  props.setMyValue;
  const newsList = props.passJsonData;  
  const filteredNews = newsList.filter(
    (news) => news.title != null && news.image_url != null
  );

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(()=>{
    if(myValue=="ok"){
      showNewsRef.current.style.display = 'block';
      
    }
  },[iValue])
 
  const closeNews = () => {
    if(iValue!="ok"){
      setMyValue("ok")
      showNewsRef.current.style.display = 'none';
    }
  };

  return (
    <div className='ShowNews'  ref={showNewsRef}>
      <div className="SelectedIMG">
        <img className='newsimg' src={filteredNews[iValue]?.image_url} alt="" />
        <div className="OverImage">
          <div className="circle">P </div>
          <div className="Readpublisher">
            <h5>{filteredNews[iValue]?.source_id}</h5>
            <h6>Publisher</h6>
          </div>
          <div className="closeNews" 
                      onClick={closeNews}><CloseOutlined /></div>
        </div>
      </div>
      <div className="newsRead">
        <h2 className='readTitle' >{filteredNews[iValue]?.title}</h2>
        <p className='ReadDate'>Published on {formatDate(filteredNews[0]?.pubDate)} </p>
        <h4 className='ReadDesc'>{filteredNews[iValue]?.description}</h4>
        <h5 className='ReadContent'>{filteredNews[iValue]?.content}</h5>
      </div>
    </div>
  )
}
export default NewsPopup