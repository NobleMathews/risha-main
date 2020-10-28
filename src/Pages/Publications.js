import React, { useRef } from 'react'
import FadeIn from 'react-fade-in';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function Publication() {

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <FadeIn>
      <div class="container pub-page-main">
        <hr/>
        <div className="blog-post">
              <h2 className="blog-post-title">Latest Publications</h2>
              <p className="blog-post-meta"><a className="preserve">[2020]</a> <a className="preserve">[2019]</a></p>
              <hr />
        </div>
        <div class="row" ref={myRef}>
          <div class="col-3">
            <img src=""></img>
          </div>
          <div class="col-9">
            2 of 3 (wider)
          </div>
        </div>
    </div>
    </FadeIn>
  );
}

export default Publication;
