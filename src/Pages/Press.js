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
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import Masonry from 'react-masonry-css'

const getUrls = require('get-urls');
const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  800: 2,
  500: 1
};

function Press() {
  const firestore = useFirestore();
  const [news, setDocument] = useState([]);
  const [links, setLinks] = useState([]);
  useEffect(()=>{
    let isSubscribed = true;

    firestore.getCollection('news',
    (snap) => {
      let documents = [];
      let arrLinks = [];
      snap.forEach(doc => {
        documents.push({...doc.data(), id: doc.id});
        arrLinks = arrLinks.concat(Array.from(getUrls(doc.data().desc)));
      });
      if (isSubscribed){
        documents.sort(function compare(b, a) {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateA - dateB;
        });
      setDocument(documents);
      setLinks(arrLinks);
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
      <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
      {links.map(link=>{
        return <LinkPreview url={link}/>;
      })
      }
      </Masonry>
      <hr/>
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
