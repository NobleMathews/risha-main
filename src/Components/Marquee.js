import React, {useState} from 'react';
import {NewsTicker} from "react-announcement-ticker";

// https://coderwall.com/p/6qaeya/lazy-carousel-in-bootstrap%20https://react-bootstrap.github.io/components/carousel/

const Marqueem = () => {

  // const [isActive, setIsActive] = useState(true)


  // function handleMouseEnter(e) {
  //   console.log("entered")

  //   setIsActive(false);
  // }

  // function handleMouseLeave(e) {
  //   console.log("left")
  //   setIsActive(true);

  // }
  
  return(
    <>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3>News</h3></div>
              <div className="panel-body">
                <NewsTicker tickerBorderColor="#000" 
                newsList={[
                  {
                      text: "Facebook is making its biggest executive shuffle in company",
                      link: "http://fb.com"
                  },
                  {
                      text: "The Best Views of NASA's InSight Mars Lander Launch?",
                      link: "http://google.com"
                  },
                  {
                      text: "Are Jupiter and Venus Messing With Earth's Climate?",
                      link: "http://cnn.com"
                  }
                  ]}
                />
              </div>
            </div>
    </>
  )
}

export default Marqueem;