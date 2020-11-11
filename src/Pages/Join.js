import React from "react";
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import {Row,Container,Col,Image} from 'react-bootstrap';
import img from "../assets/logoRecruit.png";
import { motion } from 'framer-motion';

function Join() {
  return (
    <>
    <FadeIn>
      <hr/>
      <div className="container pub-page-main">
  <div>
    <h1 className="cfh">Contact Us</h1>
    <Container>
      <Row>
      <Col md={3} className="my-auto">
        <motion.img src={img} alt="risha_lab"
            className="d-block m-auto"
            style={{maxWidth:"15em",width:"100%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            />
      </Col>
      <Col md={9} className="my-auto">
      <form className="cf">
      <div className="half left cf">
        <input type="text" id="input-name" placeholder="Name" />
        <input type="email" id="input-email" placeholder="Email address" />
        <input type="text" id="input-subject" placeholder="Subject" />
      </div>
      <div className="half right cf">
        <textarea name="message" type="text" id="input-message" placeholder="Message" defaultValue={""} />
      </div>  
      <input type="submit" defaultValue="Submit" id="input-submit" />
    </form>
      </Col>
      </Row>
      </Container>
  </div>
  </div>
  </FadeIn>
    {/* <Footer/> */}
    </>
  );
}

export default Join;
