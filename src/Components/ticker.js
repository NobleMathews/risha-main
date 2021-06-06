import React, { useState, useEffect } from 'react'
// import NewsTicker,{Directions} from 'react-advanced-news-ticker'
import Slider from "react-slick";
import useFirestore from '../hooks/useEzStore';
import DOMPurify from 'dompurify';

export default function Ticker() {
  const firestore = useFirestore();
  const [news, setDocument] = useState([]);
   
  useEffect(()=>{
    let isSubscribed = true;

    firestore.getCollection('news',
    (snap) => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data(), id: doc.id});
      });
      if (isSubscribed){
      setDocument(documents);
    }
    }
    );
    // unsubscribe();
    return () => (isSubscribed = false)
  },[])
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      autoplay: true
    };
    return (
        // <div className="newsticker">
        //   <Ticker isNewsTicker={true}>
        //     <NewsTicker id="1" title="Risha Lab develops novel AI powered augmented virtual reality" url=" https://iittp.ac.in/" meta="11:10:20"  />
        //     <NewsTicker id="2" title="Risha Lab in the news" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="3" title="How polarised light can help develop multi point projectors" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="4" title="Ground breaking research by Risha Lab" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="5" title="Upcoming tech explorer this month" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="6" title="Local news coverage of tool" url=" https://iittp.ac.in/" meta="11:10:20" />
        //   </Ticker>
        // </div>
        <div key={news.length}>
        <Slider className = "rishaFeed"
        {...settings}
        // rowHeight = {60}
        // maxRows = {10}
        // speed = {600}
        // direction = {Directions.UP}
        // duration = {10000}
        // autoStart = {true}
        // pauseOnHover = {true}
        // id = "risha_news"
        // className = "rishaFeed"
        // style = {{marginTop: 15}}
        >
        {news.map(news =>
        {
          return(
            <div className="content" onClick={()=>{return false}} style={{textAlign:'left'}} key={news.id} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(`<b>${news.date}</b> :`+news.desc)}}></div>
          )
        }
        )}
          </Slider>
        </div>
    )
}