import React from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import {Row,Container,Col,Image} from 'react-bootstrap';
import img from "../assets/logo.png";
import sir from "../assets/team/sir.jpg";
import akhilla from "../assets/team/akhila.jpg";
import darahas from "../assets/team/darahas.jpg";
import dheeraj from "../assets/team/dheeraj.jpg";
import eeshan from "../assets/team/eeshan.jpg";
import karthik from "../assets/team/karthik.jpg";
import kowndinya from "../assets/team/kowndinya.jpg";
import noble from "../assets/team/noble.jpg";
import shruti from "../assets/team/shruti.jpg";
import shubhankar from "../assets/team/shubhankar.jpg";
import vartika from "../assets/team/vartika.jpg";


function Lab() {

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={img} height="80px"/>
        </Col>
      </Row>
      </Container>
        <hr/>
        <h5>People</h5>
        <div className="container">
        <div className="img-grid lab-member">
          <figure className="figure">
          <div className="img-wrap">
            <img src={sir} alt="thumb" style={{width:"100%",height:"auto"}}/>
          </div>
            <figcaption class="figure-caption text-center">
            <p>
              <a href="https://www.cc.gatech.edu/~parikh/">Sridhar Chimalakonda</a>
              <br/>
              Assistant Professor
            </p>
            </figcaption>
          </figure>

          <figure className="figure">
          <div className="img-wrap">
            <img src={akhilla} alt="thumb" style={{width:"100%",height:"auto"}}/>
          </div>
            <figcaption class="figure-caption text-center">
            <p>
              <a href="https://www.cc.gatech.edu/~parikh/">Akhilla Manasa</a>
              <br/>
              Ph.D. Student
            </p>
            </figcaption>
          </figure>

          <figure className="figure">
          <div className="img-wrap">
            <img src={noble} alt="thumb" style={{width:"100%",height:"auto"}}/>
          </div>
            <figcaption class="figure-caption text-center">
            <p>
              <a href="https://www.cc.gatech.edu/~parikh/">Noble Mathews</a>
              <br/>
              B.tech. Student
            </p>
            </figcaption>
          </figure>

          <figure className="figure">
          <div className="img-wrap">
            <img src={akhilla} alt="thumb" style={{width:"100%",height:"auto"}}/>
          </div>
            <figcaption class="figure-caption text-center">
            <p>
              <a href="https://www.cc.gatech.edu/~parikh/">Devi Parikh</a>
              <br/>
              B.tech. Student
            </p>
            </figcaption>
          </figure>

          <figure className="figure">
          <div className="img-wrap">
            <img src={akhilla} alt="thumb" style={{width:"100%",height:"auto"}}/>
          </div>
            <figcaption class="figure-caption text-center">
            <p>
              <a href="https://www.cc.gatech.edu/~parikh/">Devi Parikh</a>
              <br/>
              B.tech. Student
            </p>
            </figcaption>
          </figure>
          
        </div>
        </div>
        <hr/>
        <h5>Past Students</h5>
        <hr/>
        <h5>Sponsors</h5>

    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Lab;
