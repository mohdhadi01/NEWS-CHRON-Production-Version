import React from "react";
import "../NEWS/NewsCatalog.css";


function NewsCatalog(props) {
  const newsDetail = props.passJsonData; 


  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="mainbox">

      {newsDetail.map((news, i) => {
        if (news.title != null && news.image_url != null) {
          const titleWords = news.title.split(" ");
          const shortTitle = titleWords.slice(0, 7).join(" ");

          return (
            <>
              <div className="news-box" >
                <img
                  className="news-box-image"
                  src={news.image_url}
                  alt=""
                />
                <div className="news-box-title">
                  <div className="heading-line">
                    <h5 className="creator">{news.creator}</h5>
                    <h5 className="date">{formatDate(news.pubDate)}</h5>
                  </div>
                  <p>{shortTitle}...</p>
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

export default NewsCatalog;
