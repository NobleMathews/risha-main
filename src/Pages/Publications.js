import React, { useRef,createRef } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { animateScroll as scroll } from "react-scroll";
import useFirestore from '../hooks/useFirestore';
import YearlyPapers from "../Components/yearlyPapers";


function Publication() {

  const { docs } = useFirestore('publications');
  const arr=[2020,2019,2018,2017];
  const arrLength = arr.length;
  const elRefs = useRef([]);

  if (elRefs.current.length !== arrLength) {
    // add or remove refs
    elRefs.current = Array(arrLength).fill().map((_, i) => elRefs.current[i] || createRef());
  }
  const scrollToRef = (ref) => scroll.scrollTo(ref.current.offsetTop)   
  const executeScroll = (index) => scrollToRef(elRefs.current[index])

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
        <hr/>
        <div className="blog-post">
              <h2 className="blog-post-title">Latest Publications</h2>
              <p className="blog-post-meta">
              {arr.map((el, i) => (
              <a className="preserveb mx-1" onClick={()=>{executeScroll(i)}}>{`[${el}]`}</a> 
              ))}
              </p>
              <hr />
        </div>
        {arr.map((el, i) => (
        <>
        <h2 ref={elRefs.current[i]}>{el}</h2>
        <YearlyPapers year={el} docs={docs}/>
        <hr/>
        </>
        ))}

    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Publication;
