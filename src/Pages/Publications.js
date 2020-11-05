import React, { useRef } from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { animateScroll as scroll } from "react-scroll";
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import {authors} from "../data"
import {Link} from 'react-router-dom';

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

        {docs && docs.map(doc => (
        <motion.div className="row" key={doc.id} 
          whileHover={{ opacity: 1 }}s
        >
          <div className="col-3 my-3">
            <motion.img src={doc.url} alt="publication_img"
            className="img-thumbnail"
            style={{width:"100%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            />
          </div>
          <div className="col-9" style={{display:"flex",alignItems:"center"}} >
          <div className="container">
            <div className="text-muted">
            {doc.authors.split(",").map((key) => (
            <Link
            className="preserveb pr-2"
              to={{
                pathname: `/info/${key}`,
                state: { modal: true }
              }}
            >
            {`[${authors.find(method => method.key === key).title}]`}
            </Link>
            ))}
            </div>
            <p><a className="preserveb font-weight-bold">{doc.title}</a></p>
            <div className="text-muted">
            {doc.links.split(']')
          .filter(function(str) {
            return /\S/.test(str);
          })
          .map((link) => (
            <a  className="preserveb pr-2" href={link.split('[').pop().split(']')[0]} target="_blank">{`[${link.split('[')[0]}]`}</a>
            ))}
            </div>
          </div>
          </div>
        </motion.div>
      ))}
        <hr />
    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Publication;
