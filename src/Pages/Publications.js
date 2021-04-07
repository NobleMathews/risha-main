import React, { useRef,createRef, useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { animateScroll as scroll } from "react-scroll";
import useFirestore from '../hooks/useFirestore';
import YearlyPapers from "../Components/yearlyPapers";
import CategoryFilter from '../Components/categoryFilter';
import SearchBar from "material-ui-search-bar";
import {authors} from "../data"

function Publication() {

  const { docs } = useFirestore('publications');
  const elRefs = useRef([]);
  const [search, setSearch] = useState("");
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

  function doSomethingWith(search){
    let AoW = search.trim().split(" ");
    let filteredDocs = docs.filter((obj) => {
      if(new RegExp(AoW.join("|"), 'i').test(Object.values(obj).join(" ")+obj.authors?.split(",").map((key) => {return authors.find(method => method.key === key)?authors.find(method => method.key === key).title:" "}).join(" "))) {
        return obj;
      }    
    });
    setFdata(filteredDocs);
    setArr([...new Set(filteredDocs.map(function(e){return toDateTime(e.createdAt.seconds)}))]);
  }

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
        <hr/>
        {/*  className="blog-post" */}
        <div>
              <h2 className="blog-post-title">Latest Publications</h2>
              <p className="blog-post-meta">
              {arr.map((el, i) => (
              <a className="preserveb mx-1" key={i} onClick={()=>{executeScroll(i)}}>{`[ ${el} ]`}</a> 
              ))}
              </p>
              <hr/>
        </div>
        <CategoryFilter categoryList={['SE','ET','HCI','C&S']} />
        <SearchBar
           style={{backgroundColor:"var(--color-card)", marginBottom:"30px"}}
            value={search}
            onChange={(newValue) => setSearch(newValue)}
            onRequestSearch={() => doSomethingWith(search)}
          />
        <div key={search}>
        {arr.map((el, i) => (
        <div key={i}>
        <h2 ref={elRefs.current[i]}>{el}</h2>
        <YearlyPapers year={el} docs={fdata}/>
        <hr/>
        </div>
        ))}
        </div>

    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Publication;
