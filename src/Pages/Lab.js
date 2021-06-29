import React from 'react'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img from "../assets/logo_min.png";
import { members, alumini, value, sponsors } from "../data"
import _ from 'lodash';

_.mixin({
  sortWith: function (arr, customFn) {
    return _.map(arr).sort(customFn)
  }
});
function Lab() {

  return (
    <>
      <FadeIn>
        <div className="container pub-page-main">
          {/* <Container>
      <Row>
        <Col xs={6} md={4}>
        <motion.img src={img} alt="risha_lab"
            // className="img-thumbnail"
            style={{height:"128px"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            />
        </Col>
      </Row>
      </Container> */}
          <hr />
          <h2 className="blog-post-title">Lab Members</h2>
          <hr />

          <p style={{ margin: "0px" }}><b>Hover to discover</b></p>
          {/* <p> There is always one moment in childhood when the door opens and lets the future in ~ Graham Greene</p> */}
          <p>Ignite your passion and chase your dreams! We do it in the <b>#RishaFamily</b>!</p>
          <div className="container">
            <div className="img-grid lab-member">
              {members.filter(x => x.pub == 'yes').map((member) => (
                <figure className="figure">
                  <Link
                    to={{
                      pathname: `/info/${member.key}`,
                      state: { modal: true }
                    }}
                  >
                    <div className="img-wrap hover-switch">
                      {/* <img className="rounded" src={require("../assets/team/"+member.key+".jpg").default} alt="thumb" style={{width:"100%",height:"auto"}}/> */}

                      <motion.img
                        className="rounded"
                        src={require("../assets/team/" + member.key + ".jpg").default} alt="thumb" style={{ width: "100%", height: "auto" }} initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      />
                      <motion.img
                        className="rounded"
                        src={require("../assets/team/b_" + member.key + ".jpg").default} alt="thumb" style={{ width: "100%", height: "auto" }} initial={{ opacity: 0 }}
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
                      <br />
                      {member.email.match(/\d+/) ? `${value[member.value].split(" ")[0]} 20${member.email.match(/\d+/)}` : value[member.value]}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <hr />
          <h5>Alumni</h5>
          <ul>
            {
              Object.entries(_.groupBy(alumini, 'value')).sort((a, b) => a[0].localeCompare(b[0])).map(([key, values]) => {
                return (
                  <>
                    <br/>
                    <h6 style={{ textAlign: "left", fontWeight: "bold" }} key={key}>{value[key]}s</h6>
                    {_.sortWith(values, function (a, b) {
                      if (a.email.match(/\d+/) < b.email.match(/\d+/)) return 1;
                      else if (a.email.match(/\d+/) == b.email.match(/\d+/)) return 0;
                      else return -1;
                      //custom function that returns either -1, 0, or 1 if a is <, ==, or > than b
                    })
                      .map((member, i) => (
                        <li key={i}>
                          <Link
                            to={{
                              pathname: `/info/${member.key}`,
                              state: { modal: true }
                            }}
                          >
                            {member.title}
                          </Link>
                          <p style={{ display: "inline" }}>{` (${value[member.value].split(" ")[0]} 20${member.email.match(/\d+/)} ${member.desc})`}</p>
                        </li>))}
                  </>)
              })
            }
          </ul>
          <hr />
          {/* <h5>Collaborator / Sponsors</h5>
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
        </div> */}

        </div>
      </FadeIn>
      <Footer />
    </>
  );
}

export default Lab;
