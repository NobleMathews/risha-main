import React from "react";
import {Container,Row,Col,Image} from 'react-bootstrap';

function Main() {
  return (
    <div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">
            </h3>
            <div className="blog-post">
              <h2 className="blog-post-title">Welcome to RISHA Lab</h2>
              <p className="blog-post-meta">Research in Intelligent Software and Human Analytics</p>
              <hr />
              <p>Who are we ? We are a dynamic research group at the Indian Institute of Technology, Tirupati. Our aim is to explore and understand quantum materials, including strange metals, high-temperature superconductors, and quantum critical electron matter.</p>
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
              <p>Over $3.8 trillion of revenue, 18 million software developers and 7.1 billion users. Software is pervasive today in every aspect of life. Just imagine a world without Google and what if all the apps on smart phones stop working? This will only grow further at a much rapid pace. </p><p>On the contrary, software has a history of failures causing losses of trillions of dollars and even lives. As software pervades natural life with sensors on our bodies, it is immensely critical to understand, analyze and scientifically provide a base for software engineering, which is still an open research problem today. This provides endless opportunities and especially for India where we have massive software industry but with no/limited research.</p>
              <hr />
              <h3>Fusion of Software Engineering and Educational Technologies</h3>
              <p>Software is omnipresent today! from simple apps in smart phones to mission-critical systems developed by millions of engineers and end users from all walks of life. On the other hand, software is quite effort-intensive, increasingly complex [millions of lines of code?], buggy and never comes with any warranties/guaranties. It is here, I wish to address interesting and significant research challenges in the area of software engineering and computing. Specifically, I am interested to empirically and qualitatively investigate novel ways for improving quality of software while facilitating reuse through design of frameworks, platforms and tools. I am also keen to explore computing challenges from the largely unexplored research area of educational technologies and computing education in India. I see interdisciplinary research as a critical way forward to drive my research spanning across software engineering, educational technologies and human-computer interaction.</p>
              <hr />
              </div>{/* /.blog-post */}
          </div>{/* /.blog-main */}
          <aside className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 mylight rounded">
              <h4 className="font-italic">Dr. Sridhar Chimalakonda</h4>
              <Container>
              <Row className="my-3">
                <Col className="mx-auto">
                  <Image  src="https://2020.msrconf.org/getProfileImage/sridharchimalakonda/76c8c23f-1094-41a3-ac57-9d38bf899419/small.jpg?1596264188000" alt="LabHead" height="150px" roundedCircle />
                </Col>
              </Row>
            </Container>
            {/* [TODO] */}
              <p className="mb-0">I am a passionate researcher and teacher in the area of software engineering with deep interest in educational technologies with an aim to deliver top quality research and teaching from India. On a personal note, I believe that creating a happy ecosystem of people and communities will take us there!</p>
            </div>
<div className="p-4 mb-3 mylight rounded">
              <h4 className="font-italic">About me</h4>
                <p className="mx-auto"><a  className="p-2" href="#">Bio</a>
                <a className="p-2" href="#">Contact</a>
                <a  className="p-2" href="#">CV</a></p><p>
                <a className="p-2"  href="#">Teaching</a>
                <a  className="p-2" href="#">Blog</a>
                <a className="p-2"  href="#">Cool Reads</a></p>
            </div>
            <div className="p-4">
              <h4 className="font-italic">Find us on</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
            <div className="p-4 mb-3 mylight rounded">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3>News</h3></div>
              <div className="panel-body">
                <marquee scrollamount="3" direction="left" height={200} direction="up" >
                  <div className="row">
                    <div className="col-md-6">
                      <span>ABCD</span> 
                    </div>
                    <div className="col-md-6">
                      <span>1234</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>EFGH</span> 
                    </div>
                    <div className="col-md-6">
                      <span>5678</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>IJKL</span> 
                    </div>
                    <div className="col-md-6">
                      <span>9101</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>ขอนแก่น</span> 
                    </div>
                    <div className="col-md-6">
                      <span>40000</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>สารคาม</span> 
                    </div>
                    <div className="col-md-6">
                      <span>44000</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>nan</span> 
                    </div>
                    <div className="col-md-6">
                      <span>1212</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>มิตรภาพ</span> 
                    </div>
                    <div className="col-md-6">
                      <span>1111</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>ABCD</span> 
                    </div>
                    <div className="col-md-6">
                      <span>1234</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>EFGH</span> 
                    </div>
                    <div className="col-md-6">
                      <span>5678</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>IJKL</span> 
                    </div>
                    <div className="col-md-6">
                      <span>9101</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>ขอนแก่น</span> 
                    </div>
                    <div className="col-md-6">
                      <span>40000</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>สารคาม</span> 
                    </div>
                    <div className="col-md-6">
                      <span>44000</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>nan</span> 
                    </div>
                    <div className="col-md-6">
                      <span>1212</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <span>มิตรภาพ</span> 
                    </div>
                    <div className="col-md-6">
                      <span>1111</span>
                    </div>
                  </div>
                  <hr />
                </marquee>
              </div>
            </div>
            </div>
            
          </aside>{/* /.blog-sidebar */}
        </div>{/* /.row */}
      </div>
    </div>
  );
}

export default Main;
