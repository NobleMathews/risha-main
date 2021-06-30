import React from "react";
import { Container, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import Footer from "../Components/Footer";
import Ticker from '../Components/ticker';
import Carousel from "../Components/Carousel";
import ShowMoreText from 'react-show-more-text';
import Masonry from 'react-masonry-css'
import MainModal from '../Components/ModalM';
import FeatPub from '../Pages/FeatPub';
import FadeIn from 'react-fade-in';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { sponsors } from "../data"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 3,
  500: 2
};
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
  const [modalContent, setModalContent] = React.useState(["", ""]);
  function trigger(check) {
    switch (check) {
      case "Bio":
        setModalContent(["Bio", "I am a **passionate researcher** and **teacher** in the area of #software engineering, with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!"]);
        break;
      case "Teaching":
        setModalContent(["Teaching", markdown]);
        break;
      case "CV":
        setModalContent(["CV", "- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image  \n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly  \n\nI am a passionate researcher and teacher in the area of software engineering with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!"]);
        break;
      case "Blog":
        setModalContent(["Blog", "I am a passionate researcher and teacher in the area of software engineering with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!"]);
        break;
      case "Reads":
        setModalContent(["Cool Reads", "Check out these articles \n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image  \n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image  \n"]);
        break;
    }
    setModalShow(true)
  }
  var flags = {};
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
                <h3 className="pb-4 mb-4 font-italic"></h3>
                <div className="blog-post">
                  <h2 className="blog-post-title">Welcome to RISHA Lab</h2>
                  <p className="blog-post-meta">Research in Intelligent Software & Human Analytics Lab</p>
                  <hr />
                  <Carousel />
                  <p style={{
                    color: "#efb6b2",
                    fontSize: "1.2rem",
                    letterSpacing: "2px",
                    fontWeight: "normal",
                    marginBottom: "0px"
                  }}>#WeAreRisha</p>
                  <hr />
                  <p style={{ textAlign: "left" }}>
                    We are here to aspire high, set benchmarks and give our best towards creating a remarkable impact in research, development and society! Our primary research goal is to expand the boundaries of <b>Software Engineering</b>, with a focus on cutting edge research, and building tools, and to leverage the power of computing to help society (<b>Educational Technologies</b> and <b>Human-Computer Interaction</b>).
              </p>
                  <hr />
                  <div className={"show-grid"}>
                  <Container style={{textAlign:"left"}}>
                    <Row style={{fontWeight:"bold"}}>
                      <Col className={"border py-2"}>Software Engineering </Col>
                      <Col className={"border py-2"}>Computing for Society</Col>
                    </Row>
                    <Row >
                      <Col className={"border py-2"}>We research effective and scalable ways to help developers improve quality of software by qualitatively and quantitatively analyzing a diversified range of software artifacts [such as code, commits, bugs, logs, patterns, designs and so on] in millions of software repositories</Col>
                      <Col className={"border py-2"}>We leverage advances in computing (such as Software Engineering, Artificial Intelligence, Augmented Reality, Visualization, Social Media Analytics, User Interfaces) to address societal challenges currently in the domains of (i) education (ii) environment (iii) healthcare and (iv) cultural heritage. </Col>
                    </Row>
                    <Row >
                      <Col className={"border py-2"}><b>Current Research Areas :</b> Empirical Software Engineering, Modernizing legacy code, Novel Source Code Representations, Semantic Code Search, Code Smells, Summarization, Software Documentation, Architecture, Quality, APIs, Cross-Project Learning, Bug Localization, Knowledge Graphs, AI for SE, SE for AI, Energy-Aware Software Engineering and Tools</Col>
                      <Col className={"border py-2"}><b>Current Research Areas :</b> Educational Technologies, Learning Analytics, Personalized Learning, Gamification, Ontologies, Virtual & Augmented Reality, Virtual Labs, User Interfaces, Human Computer Interaction, Usability </Col>
                    </Row>
                    <Row className={"py-2"}>Read more : <a style={{padding:"0px 10px"}} href="https://drive.google.com/file/d/1owGFJEfal-J9wRkIIi1N4Ybkp7WSbGAM/view?usp=sharing" target="_blank" referrerPolicy="no-referrer">Research Agenda</a></Row>
                  </Container>
                  </div>
                  <hr />
                  <Accordion defaultActiveKey="1">
                    <Card style={{padding:"0px 15px "}} className={"mylight"}>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        Lab Core Philosophy
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <>
                          <hr />
                          {/* <h2>Core Philosophy</h2> */}
                          <p>↠ To us, impactful research stems from great problems that push our limits to go beyond state-of- the-art and state-of-the-practice! | long-term problems with realistic short-term goals.</p>
                          <p>↠  The question we ask is: <strong>“Is this the best I(we) can do?”</strong> - We recursively ask this question in our journey until we reach our boundary and till we make a significant impact through research (Software Engineering), development and eventually to society!</p>
                          <hr />
                          {/* 
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
            </div>
            <hr />
              <h3>Why Software Engineering Research Matters ?</h3>
              <ShowMoreText lines ={3}>
              <p>Over $3.8 trillion of revenue, 18 million software developers and 7.1 billion users. Software is pervasive today in every aspect of life. Just imagine a world without Google and what if all the apps on smart phones stop working? This will only grow further at a much rapid pace. </p><p>On the contrary, software has a history of failures causing losses of trillions of dollars and even lives. As software pervades natural life with sensors on our bodies, it is immensely critical to understand, analyze and scientifically provide a base for software engineering, which is still an open research problem today. This provides endless opportunities and especially for India where we have massive software industry but with no/limited research.</p>
              <hr />
              <h3>Fusion of Software Engineering and Educational Technologies</h3>
              <p>Software is omnipresent today! from simple apps in smart phones to mission-critical systems developed by millions of engineers and end users from all walks of life. On the other hand, software is quite effort-intensive, increasingly complex [millions of lines of code?], buggy and never comes with any warranties/guaranties. It is here, I wish to address interesting and significant research challenges in the area of software engineering and computing. Specifically, I am interested to empirically and qualitatively investigate novel ways for improving quality of software while facilitating reuse through design of frameworks, platforms and tools. I am also keen to explore computing challenges from the largely unexplored research area of educational technologies and computing education in India. I see interdisciplinary research as a critical way forward to drive my research spanning across software engineering, educational technologies and human-computer interaction.</p>
              </ShowMoreText>
               */}
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <hr />
                  <FeatPub />
                  <hr />
                  <h5>Collaborators / Sponsors</h5>
                  <hr />
                  <div className="card-group">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {sponsors.filter(function(entry) {
                          if (flags[entry.title]) {
                              return false;
                          }
                          flags[entry.title] = true;
                          return true;
                      }).map((sponsor, i) => (
                      <div className="card m-0 p-1" key={i}>
                        <div className="d-flex align-items-center">
                          <a href={sponsor.redirect}>
                            <img className="card-img my-auto" src={require(`../assets/sponsors/${sponsor.src}`).default} alt={sponsor.title} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </Masonry>
                    {/* {sponsors.map((sponsor, i) => (
                      <div className="card m-2 px-3" key={i}>
                        <div className="d-flex align-items-center" style={{ height: "150px" }}>
                          <a href={sponsor.redirect} target="_blank">
                            <img className="card-img my-auto" src={require(`../assets/sponsors/${sponsor.src}`).default} alt={sponsor.title} />
                          </a>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>{/* /.blog-main */}
              <aside className="col-md-4 blog-sidebar">
                <div className="p-4 mb-3 mylight rounded">
                  <h4 className="title-main">Dr. Sridhar Chimalakonda</h4>
                  <Container>
                    <Row className="my-3">
                      <Col className="mx-auto">
                        <Image className="testermain" src="https://2020.msrconf.org/getProfileImage/sridharchimalakonda/76c8c23f-1094-41a3-ac57-9d38bf899419/small.jpg?1596264188000" alt="LabHead" roundedCircle />
                        <p className="ml-1 tester-sub mb-0">Assistant Professor,<br/> Department of Computer Science & Engineering <a style={{display:"block"}} className="preserveb" target="_blank" referrerPolicy="no-referrer" href="https://www.iittp.ac.in">IIT Tirupati, India</a></p>
                        <p className="ml-1 tester-sub mb-0">Email: <a className="preserveb" href="mailto:ch@iittp.ac.in">ch@iittp.ac.in</a></p>
                      </Col>
                    </Row>
                    <p style={{display:"inline-block"}}><a className="preserveb" target="_blank" referrerPolicy="no-referrer" href="https://researchweb.iiit.ac.in/~sridhar_ch/home.html" style={{ fontWeight: "bold" }}>About Me</a></p>
                    <p style={{display:"inline-block",padding:"0 10px"}}>|</p>
                    <p style={{display:"inline-block"}}><a className="preserveb" href="/talks" style={{ fontWeight: "bold" }}>Talks</a></p>
                  </Container>
                </div>
                {/* <div className="p-4 mb-3 mylight rounded"> */}
                  {/* <h4 className="font-italic">About me</h4> */}
                <Row className="mb-3">
                  <Col>
                  <div className="p-4 mylight rounded" style={{height:"100%"}}>
                  <a className="p-2 preserveb" href="/calendar">Upcoming Conference Deadlines</a>
                  </div>
                  </Col>
                  {/* <Col>
                  <div className="p-4 mylight rounded" style={{height:"100%"}}>
                  <a className="p-2" href="/resources">Learning Resources</a>
                  </div>
                  </Col> */}
                </Row>
                  {/* <a className="p-2 preserveb">View Upcoming Deadlines</a> */}
                  {/* <p className="mx-auto">
                <a  className="p-2" onClick={()=>{trigger("Bio")}}>Bio</a>
                <a className="p-2" onClick={()=>{trigger("Teaching")}}>Teaching</a>
                <a  className="p-2" onClick={()=>{trigger("CV")}}>CV</a></p><p>
                <a  className="p-2"onClick={()=>{trigger("Blog")}}>Blog</a>
                <a className="p-2" onClick={()=>{trigger("Reads")}}>Cool Reads</a></p> */}
                {/* </div> */}
                {/* <div className="p-4 mb-3 mylight rounded">
                  <a className="p-2" href="/calendar">Learning Resources</a>
                </div> */}
                <div className="py-4 mb-3 mylight rounded" onClick={(e) => { e.preventDefault(); window.location.href = '/news'; }} style={{ cursor: "pointer", paddingRight:"10px" }}>
                  <h4 className="font-italic">News</h4>
                  <Ticker />
                </div>
                <div className="p-4">
                  <h4 className="font-italic">Find us on</h4>
                  <ol className="list-unstyled">
                    <li><a href="https://twitter.com/rishalab"><FaTwitter /> Twitter</a></li>
                    <li><a href="https://www.youtube.com/channel/UCcetB0OV3W1iUK69JRHHLTw"><FaYoutube /> Youtube</a></li>
                    <li><a href="https://github.com/RISHA-LAB-IITT"><FaGithub /> GitHub</a></li>
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
      <Footer />
    </>
  );
}

export default Main;
