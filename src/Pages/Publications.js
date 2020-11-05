import React, { useRef } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { animateScroll as scroll } from "react-scroll";
import useFirestore from '../hooks/useFirestore';
import YearlyPapers from "../Components/yearlyPapers";

const scrollToRef = (ref) => scroll.scrollTo(ref.current.offsetTop)   

function Publication() {

  const { docs } = useFirestore('publications');
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
        <hr/>
        <div className="blog-post">
              <h2 className="blog-post-title">Latest Publications</h2>
              <p className="blog-post-meta"><a className="preserveb" onClick={()=>{executeScroll()}}>[2020]</a> <a className="preserveb">[2019]</a></p>
              <hr />
        </div>

        <h2 ref={myRef}>2020</h2>
        <YearlyPapers year={2020} docs={docs}/>
        <hr/>
    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Publication;
