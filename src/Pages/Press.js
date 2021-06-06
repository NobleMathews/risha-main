import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import useFirestore from '../hooks/useEzStore';
import DOMPurify from 'dompurify';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

function Press() {
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
  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
        <hr/>
        <div>
              <h2 className="blog-post-title">Risha Lab News</h2>
              <hr/>
        </div>
      {news?.length > 0 ? (
        // <VerticalTimeline animate={false}>
        // {news.map(news => {
        // <VerticalTimelineElement
        //   className="vertical-timeline-element--work"
        //   contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //   contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        //   date={news.date}
        //   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //   icon={<ImNewspaper />}
        // >
        //   {console.log(news)}
        //   <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(news.desc)}}></div>
        // </VerticalTimelineElement>
        // })}
        // </VerticalTimeline>
      <Timeline>
      {news.map(news => {
        return(
        <TimelineItem key={news.id}>
          <TimelineOppositeContent style={{flex:"none"}}>
            <Typography style={{fontWeight:"bolder"}}>{news.date}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(news.desc)}}></div>
          </TimelineContent>
        </TimelineItem>
        )
        })}
      </Timeline>
      ):<p>Need to research where the news went o.O)</p>}
    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Press;
