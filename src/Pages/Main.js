import React from "react";
import {Container,Row,Col,Image} from 'react-bootstrap';
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import Ticker from '../Components/ticker'
import ShowMoreText from 'react-show-more-text';
import MainModal from '../Components/ModalM';
import FadeIn from 'react-fade-in';
import {FaGithub,FaTwitter,FaFacebook} from 'react-icons/fa';

const markdown = `**"The best thing a teacher can do is to bring out the best in students in best ways!!!"**.

> I believe that teaching should inspire students beyond grades and jobs, instill foundations for life and push boundaries! I explored few experiments during my teaching, some worked and some did not! It is exciting and challenging to be a faculty during this emerging times!

---

**@IIT-Tp**

| Timeline | Courses |
|:----------|:-------------|
| **Jan to May 2020** ||
|| - Industrial Software Engineering (CS5206) |
|| - Industrial Software Engineering (CS5206) |
| **Aug to Dec 2020** ||
|| - Software Engineering (CS3105) |
|| - Programming Methodology (CS2105)|

---
| >_ |
|:----------|
|Software Engineering (Foundations & Practice)|
| *Monsoon 2015, 2016 @ IIIT Sri City* |
|:----------|
|Programming Languages (Foundations & Practice)|
| *Spring 2017 @ IIT Tirupati; Spring 2016, 2017 @ IIIT Sri City* |
|:----------|
|Foundations of Programming [Primer]|
| *Programming exercises in imperative, objectoriented and functional paradigms* |
|:----------|
|Foundations of Software Engineering [Primer]|
| *Basic foundations and essential constructs for design of software.*|
---

##### Views on Teaching

Can we motivate the best undergrads of IIT to solve societal challenges of India and deliver results?

Interact ↠ Informal at the outside - let students play, have fun, explore but be formal inside, meaning no compromise on quality! - clear learning goals, challenging exercises & high quality benchmarks!
Innovate ↠ Have fixed and flexible components for every course and adapt it as per specific needs. Use innovative teaching practices to facilitate deeper learning of the subject
Inspire ↠ Push their boundaries and provoke them to think, question and inquire beyond conventions

`

function Main() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(["",""]);
  function trigger(check){
    switch(check){
      case "Bio":
        setModalContent(["Bio","I am a **passionate researcher** and **teacher** in the area of #software engineering, with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!"]);
        break;
      case "Teaching":
        setModalContent(["Teaching",markdown]);
        break;
      case "CV":
        setModalContent(["CV","- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image  \n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly  \n\nI am a passionate researcher and teacher in the area of software engineering with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!"]);
        break;
      case "Blog":
        setModalContent(["Blog","I am a passionate researcher and teacher in the area of software engineering with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!"]);
        break;
      case "Reads":
        setModalContent(["Cool Reads","Check out these articles \n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image  \n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image  \n"]);
        break;
    }
    setModalShow(true)
  }
  return (
    <>
    <FadeIn>
    <div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="container">
  
        <MainModal
          heading={modalContent[0]}
          body={modalContent[1]}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">
            </h3>
            <div className="blog-post">
              <h2 className="blog-post-title">Welcome to RISHA Lab</h2>
              <p className="blog-post-meta">Research in Intelligent Software and Human Analytics</p>
              <hr />
              <Carousel />
              <hr />
              <p>Who are we ? We are a dynamic research group at the Indian Institute of Technology, Tirupati. Our aim is to explore and understand the expand the boundaries of human computer interaction, including  research, software engineering and building tools to help the society.</p>
              <hr />
              <h2>Core Philosophy</h2>
              <p>↠ To us, impactful research stems from great problems that push our limits to go beyond stateof- the-art and state-of-the-practice! | long-term problems with realistic short-term goals</p>
              <p>↠ <strong>"Raise your quality standards as high as you can live with, avoid wasting your time on routine problems, and always try to work as closely as possible at the boundary of your abilities. Do this, because it is the only way of discovering how that boundary should be moved forward."</strong><pre><code>- Prof. Edsger W. Dijkstra</code></pre> The foundations for my research stem from Prof. Edsger W. Dijkstra</p>
              <p>↠ I construe this to push the boundary of the field, especially for an young and emerging discipline like software engineering in collaboration with fellow researchers in the community.</p>
              <hr />
              <div className="blog-post">
              <h2 className="blog-post-title">Research Areas</h2>
              <hr />
              <div style={{textAlign:"left"}}>
                <h3 >Software Engineering</h3>
                <p>Empirical Software Engineering, Software Quality & Software Reuse, Patterns, Software Product Lines, Software Architecture, Requirements Engineering, Mobile Applications Analyze millions of software repositories qualitatively and quantitatively to assess quality [like correctness, security, reliability, usability and so on] of a diversified range of software artifacts [like code, bugs, logs, tests, patterns, designs and so on] How to instrument software with virtual agents and assistants that can continuously and automatically adapt the software as per evolving requirements? How to support millions of software developers, testers to write quality software?</p>

                <h3>Educational Technologies</h3>
                <p>Quality, Scale & Variety in Instructional Design, Ontologies, Gamification, Personalized Learning, Virtual & Augumented Reality for Story Telling and Labs, Computing Research for Education How to design and customize educational technologies for all levels of education, adapt them for varied teaching styles, learning styles and different modes of evaluation and for a range of subjects to be delivered in multiple languages? Design of Virtual Reality & Augmented Reality environments for story telling, education [such as demonstrating complex procedures in medical domain], elevated experiences for history and culture Provide personalized life long learning for 7.1 billion learners</p>

                <h3>Human Computer Interaction</h3>
                <p>Quality, Scale & Variety in Instructional Design, Ontologies, Gamification, Personalized Learning, Virtual & Augumented Reality for Story Telling and Labs, Computing Research for Education How to design and customize educational technologies for all levels of education, adapt them for varied teaching styles, learning styles and different modes of evaluation and for a range of subjects to be delivered in multiple languages? Design of Virtual Reality & Augmented Reality environments for story telling, education [such as demonstrating complex procedures in medical domain], elevated experiences for history and culture Provide personalized life long learning for 7.1 billion learners</p>
              </div>
            </div>{/* /.blog-post */}
            <hr />
              <h3>Why Software Engineering Research Matters ?</h3>
              <ShowMoreText lines ={3}>
              <p>Over $3.8 trillion of revenue, 18 million software developers and 7.1 billion users. Software is pervasive today in every aspect of life. Just imagine a world without Google and what if all the apps on smart phones stop working? This will only grow further at a much rapid pace. </p><p>On the contrary, software has a history of failures causing losses of trillions of dollars and even lives. As software pervades natural life with sensors on our bodies, it is immensely critical to understand, analyze and scientifically provide a base for software engineering, which is still an open research problem today. This provides endless opportunities and especially for India where we have massive software industry but with no/limited research.</p>
              <hr />
              <h3>Fusion of Software Engineering and Educational Technologies</h3>
              <p>Software is omnipresent today! from simple apps in smart phones to mission-critical systems developed by millions of engineers and end users from all walks of life. On the other hand, software is quite effort-intensive, increasingly complex [millions of lines of code?], buggy and never comes with any warranties/guaranties. It is here, I wish to address interesting and significant research challenges in the area of software engineering and computing. Specifically, I am interested to empirically and qualitatively investigate novel ways for improving quality of software while facilitating reuse through design of frameworks, platforms and tools. I am also keen to explore computing challenges from the largely unexplored research area of educational technologies and computing education in India. I see interdisciplinary research as a critical way forward to drive my research spanning across software engineering, educational technologies and human-computer interaction.</p>
              </ShowMoreText>
              <hr />
              </div>
          </div>{/* /.blog-main */}
          <aside className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 mylight rounded">
              <h4 className="title-main">Dr. Sridhar Chimalakonda</h4>
              <Container>
              <Row className="my-3">
                <Col className="mx-auto">
                <Image  className="testermain" src="https://2020.msrconf.org/getProfileImage/sridharchimalakonda/76c8c23f-1094-41a3-ac57-9d38bf899419/small.jpg?1596264188000" alt="LabHead" roundedCircle />
                <p className="ml-1 tester-sub mb-0">Associate Professor, Department of Computer Science & Engineering <a className="preserve">IIT Tirupati, India</a></p>
                <p className="ml-1 tester-sub mb-0">Email: <a className="preserve">ch@iittp.ac.in</a></p>
                </Col>
              </Row>
            </Container>
            </div>
              <div className="p-4 mb-3 mylight rounded">
              <h4 className="font-italic">About me</h4>
                <p className="mx-auto">
                <a  className="p-2" onClick={()=>{trigger("Bio")}}>Bio</a>
                <a className="p-2" onClick={()=>{trigger("Teaching")}}>Teaching</a>
                <a  className="p-2" onClick={()=>{trigger("CV")}}>CV</a></p><p>
                <a  className="p-2"onClick={()=>{trigger("Blog")}}>Blog</a>
                <a className="p-2" onClick={()=>{trigger("Reads")}}>Cool Reads</a></p>
            </div>
            <div className="p-4">
              <h4 className="font-italic">Find us on</h4>
              <ol className="list-unstyled">
                <li><a href="#"><FaGithub /> GitHub</a></li>
                <li><a href="#"><FaTwitter/> Twitter</a></li>
                <li><a href="#"><FaFacebook/> Facebook</a></li>
              </ol>
            </div>
            {/* <div className="p-4 mb-3 mylight rounded">
            <Marquee/>
            </div> */}
            
          </aside>{/* /.blog-sidebar */}
        </div>{/* /.row */}
      </div>
    </div>
    </FadeIn>
    <Ticker/>
    <Footer/>
    </>
  );
}

export default Main;
