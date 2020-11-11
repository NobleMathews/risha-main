import React from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import {Row,Container,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import img from "../assets/logo.png";
import {members,alumini,value,sponsors} from "../data"

function Lab() {

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
      <Container>
      <Row>
        <Col xs={6} md={4}>
        <motion.img src={img} alt="risha_lab"
            className="img-thumbnail"
            style={{height:"80px"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            />
        </Col>
      </Row>
      </Container>
        <hr/>
        <h5>People</h5>
        <div className="container">
        <div className="img-grid lab-member">
        {members.map((member) => (
          <figure className="figure">
            <Link
              to={{
                pathname: `/info/${member.key}`,
                state: { modal: true }
              }}
            >
            <div className="img-wrap">
              {/* <img className="rounded" src={require("../assets/team/"+member.key+".jpg").default} alt="thumb" style={{width:"100%",height:"auto"}}/> */}
              <motion.img
                className="rounded"
                src={require("../assets/team/"+member.key+".jpg").default} alt="thumb" style={{width:"100%",height:"auto"}}                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                />
            </div>
            </Link>
            <figcaption className="figure-caption text-center">
            <p>
              <Link
                to={{
                  pathname: `/info/${member.key}`,
                  state: { modal: true }
                }}
              >
              {member.title}
              </Link>
              <br/>
              {value[member.value]}
            </p>
            </figcaption>
          </figure>
        ))}
        </div>
        </div>
        <hr/>
        <h5>Past Students</h5>
        <ul>
        {alumini.map((member) => (
          <li>
              <Link
                to={{
                  pathname: `/info/${member.key}`,
                  state: { modal: true }
                }}
              >
              {member.title}
              </Link>
              <p style={{display:"inline"}}>{` (${value[member.value].split(" ")[0]} 20${member.email.match(/\d+/)}) ${member.desc}`}</p>
          </li>
        ))}
        </ul>
        <hr/>
        <h5>Collaborator / Sponsors</h5>
        <div className="card-group">
        {sponsors.map((sponsor) => (
          <div className="card m-2 px-3">
            <div className="d-flex align-items-center" style={{height:"150px"}}>
            <a href={sponsor.redirect} target="_blank">
            <img className="card-img my-auto" src={require(`../assets/sponsors/${sponsor.src}`).default} alt={sponsor.title} />
            </a> 
            </div>
          </div>
        ))}
        </div>

    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Lab;
