import React, { useRef,createRef, useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { animateScroll as scroll } from "react-scroll";
import useFirestore from '../hooks/useFirestore';
import YearlyPapers from "../Components/yearlyPapers";

function Talks() {

  const { docs } = useFirestore('talks');
  const elRefs = useRef([]);
  const [fdata, setFdata] = useState([]);
  const [arr, setArr] = useState([]);

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t.getFullYear();
  }

  useEffect(() => {
    setFdata(docs);
    setArr([...new Set(docs.map(function(e){return toDateTime(e.createdAt.seconds)}))]);
  },[docs])

  if (elRefs.current.length !== arr.length) {
    // add or remove refs
    elRefs.current = Array(arr.length).fill().map((_, i) => elRefs.current[i] || createRef());
  }
  const scrollToRef = (ref) => scroll.scrollTo(ref.current.offsetTop)   
  const executeScroll = (index) => scrollToRef(elRefs.current[index])


  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
        <hr/>
        {/*  className="blog-post" */}
        <div>
              <h2 className="blog-post-title">Latest Talks</h2>
              {/* <p className="blog-post-meta">
              {arr.map((el, i) => (
              <a className="preserveb mx-1" key={i} onClick={()=>{executeScroll(i)}}>{`[ ${el} ]`}</a> 
              ))}
              </p> */}
              <hr/>
        </div>

        {arr.map((el, i) => (
        <div key={i}>
        {/* <h2 ref={elRefs.current[i]}>{el}</h2> */}
        <YearlyPapers year={el} docs={fdata}/>
        <hr/>
        </div>
        ))}

    </div>
    </FadeIn>
    {/* <Footer/> */}
    </>
  );
}

export default Talks;
