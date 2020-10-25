import React, {useState} from 'react';


const Marquee = (props) => {

  const [isActive, setIsActive] = useState(true)


  function handleMouseEnter(e) {
    console.log("entered")

    setIsActive(false);
  }

  function handleMouseLeave(e) {
    console.log("left")
    setIsActive(true);

  }

  return(
    <div className="marquee-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="marquee">
        <p className={isActive ? 'marquee-content' : 'marquee-content inactive'}>{props.string}</p>     
      </div>
    </div>
  )
}

export default Marquee;