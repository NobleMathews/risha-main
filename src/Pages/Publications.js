import React, { useRef } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { animateScroll as scroll } from "react-scroll";

const scrollToRef = (ref) => scroll.scrollTo(ref.current.offsetTop)   

function Publication() {

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

        <h2>2020</h2>

        <div className="row" ref={myRef}>
          <div className="col-3 my-3">
            <img className="img-thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/risha-lab-server.appspot.com/o/h4.jpg?alt=media&token=3bc5fabd-ef32-4682-b8cf-b2160ae01cfc"} style={{width:"100%"}}></img>
          </div>
          <div className="col-9" style={{display:"flex",alignItems:"center"}} >
          <div className="container">
            <div className="text-muted">
              <a className="preserveb pr-2">[Noble Mathews]</a>
              <a className="preserveb pr-2">[‪Akhila Venigalla]</a>
              <a className="preserveb pr-2">[Sridhar Chimalakonda]</a>
            </div>
            <p><a className="preserveb font-weight-bold">With supporting text below as a natural lead-in to additional content.</a></p>
            <div className="text-muted">
              <a className="preserveb pr-2">[Github]</a>
              <a className="preserveb pr-2">[Youtube]</a>
              <a className="preserveb pr-2">[App]</a>
            </div>
          </div>
          </div>
        </div>

        <hr />

        <div className="row" ref={myRef}>
          <div className="col-3 my-3">
            <img className="img-thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/risha-lab-server.appspot.com/o/h4.jpg?alt=media&token=3bc5fabd-ef32-4682-b8cf-b2160ae01cfc"} style={{width:"100%"}}></img>
          </div>
          <div className="col-9" style={{display:"flex",alignItems:"center"}} >
          <div className="container">
            <div className="text-muted">
              <a className="preserveb pr-2">[Noble Mathews]</a>
              <a className="preserveb pr-2">[‪Akhila Venigalla]</a>
              <a className="preserveb pr-2">[Sridhar Chimalakonda]</a>
            </div>
            <p><a className="preserveb font-weight-bold">With supporting text below as a natural lead-in to additional content.</a></p>
            <div className="text-muted">
              <a className="preserveb pr-2">[Github]</a>
              <a className="preserveb pr-2">[Youtube]</a>
              <a className="preserveb pr-2">[App]</a>
            </div>
          </div>
          </div>
        </div>

        <hr/>

        <div className="row" ref={myRef}>
          <div className="col-3 my-3">
            <img className="img-thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/risha-lab-server.appspot.com/o/h4.jpg?alt=media&token=3bc5fabd-ef32-4682-b8cf-b2160ae01cfc"} style={{width:"100%"}}></img>
          </div>
          <div className="col-9" style={{display:"flex",alignItems:"center"}} >
          <div className="container">
            <div className="text-muted">
              <a className="preserveb pr-2">[Noble Mathews]</a>
              <a className="preserveb pr-2">[‪Akhila Venigalla]</a>
              <a className="preserveb pr-2">[Sridhar Chimalakonda]</a>
            </div>
            <p><a className="preserveb font-weight-bold">With supporting text below as a natural lead-in to additional content.</a></p>
            <div className="text-muted">
              <a className="preserveb pr-2">[Github]</a>
              <a className="preserveb pr-2">[Youtube]</a>
              <a className="preserveb pr-2">[App]</a>
            </div>
          </div>
          </div>
        </div>

        <hr/>

        <div className="row" ref={myRef}>
          <div className="col-3 my-3">
            <img className="img-thumbnail" src={"https://firebasestorage.googleapis.com/v0/b/risha-lab-server.appspot.com/o/h4.jpg?alt=media&token=3bc5fabd-ef32-4682-b8cf-b2160ae01cfc"} style={{width:"100%"}}></img>
          </div>
          <div className="col-9" style={{display:"flex",alignItems:"center"}} >
          <div className="container">
            <div className="text-muted">
              <a className="preserveb pr-2">[Noble Mathews]</a>
              <a className="preserveb pr-2">[‪Akhila Venigalla]</a>
              <a className="preserveb pr-2">[Sridhar Chimalakonda]</a>
            </div>
            <p><a className="preserveb font-weight-bold">With supporting text below as a natural lead-in to additional content.</a></p>
            <div className="text-muted">
              <a className="preserveb pr-2">[Github]</a>
              <a className="preserveb pr-2">[Youtube]</a>
              <a className="preserveb pr-2">[App]</a>
            </div>
          </div>
          </div>
        </div>
    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Publication;
