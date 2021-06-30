import React from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import {Row,Container,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import img from "../assets/logo_min.png";

function Logo() {

  return (
    <>
    <FadeIn>
      <div className="container pub-page-main">
      <Container>
      <div className="small-screen">
      <figure>
      <motion.img src={img} alt="risha_lab"
            style={{maxWidth:"100%", maxHeight:"70vh"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
      />
              <figcaption >Website and Logo designed by <a href="/info/noble">Noble</a></figcaption>
        </figure>
        <hr/>
        <h5>About the Logo</h5>
        <ul>
          <li><b>Binary code:</b> Binary code positioned around the logo represents the beautiful language of the computers on which we work it can either be true or false nothing in between. The binary code used in the logo  “01010010 01001001 01010011 01001000 01000001 ...”  can be converted to get RISHA Lab IIT Tirupati.</li>
          <li><b>Black pedestal for the pen nib:</b> The black box is used to represent a system that has an input and an output but its inner workings are unknown. On the top of the black box, we see an incomplete circle which is modeled after the zen symbol known as the “open ensō” which sees beauty in imperfection as it allows for movement and development to a complete and perfect state. </li>
          <li><b>The box with the enclosed graph</b> depicts our focus on analytics. The bow shape in the curve calls out to the historic teacher Dronacharya from Hindu mythology. Thus the black pedestal is symbolic of our lab’s efforts to achieve a state of perfect knowledge and teaching it to the world from an Indian context through the various research publications by the lab</li>
          <li><b>Red nib:</b> Red is a color of passion and energy, the nib of a fountain pen is symbolic of writing and the glowing bulb represents new ideas. Overall it is representative of our zeal in writing to spread new ideas.</li>
          <li><b>The black maze:</b> The maze used in the logo is one with no entry and exit (it is a trap) and symbolizes confusion. The red arrows pierce through the trap in all directions and continue forward and thus creating a way out by expanding the boundaries depicted by the double-headed arrows.</li>
          <li><b>The double-headed arrow</b> widens the gaps as it proceeds to signify helping others by opening new areas and build upon our work as well. One arrow indicates our focus on short-term and immediate impact, and the other arrow signifies our focus on long-term impact!</li>
          <li>At the core is a <b>glowing crystal</b> with multiple colors derived from a peacock palette to signify the wide areas of work done and ideas, few networking rings rotate around the same as well.</li>
          <li><b>Mandalam:</b> The shiny core of the logo is surrounded by a mandalam. This symbol taken from Hindu mysticism represents the universe and the circular design symbolizes that everything is connected in the cycle of life. We believe that nothing in this world can be studied with a silo mentality  and everything is connected. We at RISHA lab are open to all irrespective of their area of study as long as they share the zeal to enrich the world of computers with their own unique touch.</li>
        </ul>
        <hr/>
      </div>
      <Row className="big-screen">
        <Col xs={6} md={6} className={"mx-auto text-center"}>
        <figure>
        <motion.img src={img} alt="risha_lab"
            style={{maxWidth:"50vw", maxHeight:"80vh", position:"fixed", left:"25px"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            />
        <figcaption style={{bottom:"25px", position:"fixed", left:"25px"}}>Website and Logo designed by <a href="/info/noble">Noble</a></figcaption>
        </figure>
        </Col>
        <Col>
        <hr/>
        <h5>About the Logo</h5>
        <ul>
          <li><b>Binary code:</b> Binary code positioned around the logo represents the beautiful language of the computers on which we work it can either be true or false nothing in between. The binary code used in the logo  “01010010 01001001 01010011 01001000 01000001 ...”  can be converted to get RISHA Lab IIT Tirupati.</li>
          <li><b>Black pedestal for the pen nib:</b> The black box is used to represent a system that has an input and an output but its inner workings are unknown. On the top of the black box, we see an incomplete circle which is modeled after the zen symbol known as the “open ensō” which sees beauty in imperfection as it allows for movement and development to a complete and perfect state. </li>
          <li><b>The box with the enclosed graph</b> depicts our focus on analytics. The bow shape in the curve calls out to the historic teacher Dronacharya from Hindu mythology. Thus the black pedestal is symbolic of our lab’s efforts to achieve a state of perfect knowledge and teaching it to the world from an Indian context through the various research publications by the lab</li>
          <li><b>Red nib:</b> Red is a color of passion and energy, the nib of a fountain pen is symbolic of writing and the glowing bulb represents new ideas. Overall it is representative of our zeal in writing to spread new ideas.</li>
          <li><b>The black maze:</b> The maze used in the logo is one with no entry and exit (it is a trap) and symbolizes confusion. The red arrows pierce through the trap in all directions and continue forward and thus creating a way out by expanding the boundaries depicted by the double-headed arrows.</li>
          <li><b>The double-headed arrow</b> widens the gaps as it proceeds to signify helping others by opening new areas and build upon our work as well. One arrow indicates our focus on short-term and immediate impact, and the other arrow signifies our focus on long-term impact!</li>
          <li>At the core is a <b>glowing crystal</b> with multiple colors derived from a peacock palette to signify the wide areas of work done and ideas, few networking rings rotate around the same as well.</li>
          <li><b>Mandalam:</b> The shiny core of the logo is surrounded by a mandalam. This symbol taken from Hindu mysticism represents the universe and the circular design symbolizes that everything is connected in the cycle of life. We believe that nothing in this world can be studied with a silo mentality  and everything is connected. We at RISHA lab are open to all irrespective of their area of study as long as they share the zeal to enrich the world of computers with their own unique touch.</li>
        </ul>
        <hr/>
        </Col>
      </Row>
      </Container>
    </div>
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Logo;
