import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import slamCoverr from './slamimg/border2r.png'
import slamCoverl from './slamimg/border2l.png'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";
import Tabletop from "tabletop";

export default function Slam() {
	// const firestore = useFirestore();
	// const [ open, setOpen ] = useState([])

	// useEffect(()=>{
	// 	let isSubscribed = true;
	const [data, setData] = useState([]);
	const [iSlam, setSlam] = useState(0);
	const [isMobile, setIsMobile] = useState(false)
 
	//choose the screen size 
	const handleResize = () => {
	  if (window.innerWidth < 720) {
		  setIsMobile(true)
	  } else {
		  setIsMobile(false)
	  }
	}
	
	// create an event listener
	useEffect(() => {
	  window.addEventListener("resize", handleResize)
	})
	
	const handler = (index) => {
		setSlam(index);
	}

	useEffect(() => {
		Tabletop.init({
		  key: "1LNOpfed9Ua83C9CdnlvBRHBzJSqcjo_2P88qkdXogRA",
		  simpleSheet: true
		})
		  .then((data) => setData(data))
		  .catch((err) => console.warn(err));
	  }, []);

	// var image = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
	var random  = Math.floor(Math.random()*7)-3;
	var random2 = Math.floor(Math.random()*7)-3;
	var random3 = Math.floor(Math.random()*7)-3; 
    function randomNumber(min, max) { 
		return Math.random() * (max - min) + min; 
	}

  return (
	<>
	<Section>
	{data[iSlam] &&
	<div className="container">
		{/* <div className="row">
        <h1>Woof</h1>
		</div> */}
        <div className="row">
		<div className="col-8">
        <h3>The RISHA Slambook</h3>
		<hr/>
		<FadeIn>
		<div style={{textAlign:"left"}} className={!isMobile?"d-flex bd-highlight align-items-center":""}>
		<div  className="p-2 foto" style={{background:`#fff url(http://drive.google.com/uc?export=view&id=${data[iSlam]["Your current photo"].split("?id=")[1]}) no-repeat center`,transform:`rotate(${random}deg) translate(${random2}px, ${random3}px)`}}></div>
		<div className="p-2 flex-grow-1" style={{textAlign:"left"}}>
		<p><b>Name: </b>{data[iSlam]["Your Name"]}</p>
		<p><b>Birth Date: </b>{data[iSlam]["Your date of birth"]}</p>
		<p><b>Course IITT: </b>{data[iSlam]["Course you were enrolled in"]} {data[iSlam]["Year of passing out"]}</p>
		<p><b>Current Location: </b>{data[iSlam]["Career path followed after IITT"]}</p>
		</div>
		</div>
		{/* </div>
		<div  className="p-2 foto" style={{background:`#fff url(http://drive.google.com/uc?export=view&id=${data[iSlam]["Your current photo"].split("?id=")[1]}) no-repeat center`,transform:`rotate(${random}deg) translate(${random2}px, ${random3}px)`}}></div>
		</div> */}
		{/* <div className="d-flex bd-highlight align-items-center"> */}
		<>
		<div className="sticky-container mb-3">
		{ data[iSlam]["How would you summarize your time here in one line ?"] &&
		<div className="sticky" style={{transform:`rotate(${randomNumber(-3,3)}deg)`,filter:`hue-rotate(${randomNumber(1,720)}deg)`, width:"auto", height:"auto"}} role="textbox"> 📌 <br/> {data[iSlam]["How would you summarize your time here in one line ?"]}</div>
		}
		{ data[iSlam]["Sirs Comment"] &&
		<div className="sticky" style={{transform:`rotate(${randomNumber(-3,3)}deg)`,filter:`hue-rotate(${randomNumber(1,720)}deg)`, width:"auto", height:"auto"}} role="textbox"> <b>Sir's Comments</b> <br/> {data[iSlam]["Sirs Comment"]}</div>
		}
		</div>
		<div className="p-2" style={{textAlign:"left"}}>
		{data[iSlam]["What was the most memorable thing for you as a part of Risha Lab ?"] &&
		<>
		<p><b>What was the most memorable thing for you as a part of Risha Lab ?</b></p>
		<p>{data[iSlam]["What was the most memorable thing for you as a part of Risha Lab ?"]}</p>
		</>
		}{data[iSlam]["Any things that you feel you got to experience only because of your time here ?"] &&
		<>
		<p><b>Any things that you feel you got to experience only because of your time here ?</b></p>
		<p>{data[iSlam]["Any things that you feel you got to experience only because of your time here ?"]}</p>
		</>
		}{data[iSlam]["Did you enjoy your time here overall, what all inspired you and do you have any regrets of not having done something ?"] &&
		<>
		<p><b>Did you enjoy your time here overall, what all inspired you and do you have any regrets of not having done something ?</b></p>
		<p>{data[iSlam]["Did you enjoy your time here overall, what all inspired you and do you have any regrets of not having done something ?"]}</p>
		</>
		}{data[iSlam]["Anything you would like to share with a fresher based on your experiences ?"] &&
		<>
		<p><b>Anything you would like to share with a fresher based on your experiences ?</b></p>
		<p>{data[iSlam]["Anything you would like to share with a fresher based on your experiences ?"]}</p>
		</>
		}
		</div>
		{/* </div> */}
		</>
		</FadeIn>
		</div>
        <div className="col-4">
        <h3>Index</h3>
        <hr/>
		{data.map((item, i) => (
		<p key={i} className={"slamIndex"} style={{display:"block",fontWeight:"bold", cursor:"pointer"}} onClick={() => handler(i)}>{item["Your Name"]}</p>
      	))}
		<hr/>
        {/* <a style={{fontWeight:"bold"}}>Enter your own experiences</a> */}
        </div>
		</div>
	</div>
	}
	</Section>
	<Footer/>
	</>
);
}

 const Section = styled.div`

 @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');

 font-family: 'Indie Flower', cursive !important;
 font-size: larger;

 .slamIndex::before{
	content:"↠ ";
 }


 @media screen and (min-width: 500px) {
	.col-8{
		border: 30px solid transparent;
		padding: 15px;
		border-image: url(${slamCoverr}) 320 round;
	 }
	
	 .col-4{
		border: 30px solid transparent;
		padding: 15px;
		border-image: url(${slamCoverl}) 320 round;
	 }
  }

 .foto {
    background: #fff;
    width: 150px;
    height: 150px;
    display: inline-block;
    margin: 20px;
    padding: 5px;
    border-radius: 2px;
	background-size: 100% 100%!important;
    box-shadow: 0 0 2px;
    transform:rotate(0deg);
    -ms-transform:rotate(0deg); /* IE 9 */
    -webkit-transform:rotate(0deg); /* Safari and Chrome */
    -webkit-backface-visibility: hidden; /* Make edges smooth in webkitbrowsers */
}
.foto:after {
    content: '';
    position: absolute;
    left: -15px;
    transform:rotate(-45deg);
    -ms-transform:rotate(-45deg); /* IE 9 */
    -webkit-transform:rotate(-45deg); /* Safari and Chrome */ 
    width: 60px;
    height: 20px;
    background: hsla(0,100%,100%,0.7);
}

.foto:before {
    content: '';
    position: absolute;
    right: -15px;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); /* IE 9 */
    -webkit-transform:rotate(45deg); /* Safari and Chrome */  
    width: 60px;
    height: 20px;
    background: hsla(0,100%,100%,0.7);
}

.sticky-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
  }
  .sticky-container .sticky {
	position: relative;
	height: 280px;
	width: 220px;
	display: inline-block;
	margin: 10px;
	padding: 18px 10px 10px 10px;
	box-sizing: border-box;
	box-shadow: 6px 7px 12px -5px rgba(0, 0, 0, 0.75);
	font-size: 24px;
	background: #ffd31d;
	resize: both;
	overflow: scroll;
	animation: stickAnim 0.3s ease;
	color:black!important;
  }
  .sticky-container .sticky::-webkit-scrollbar {
	display: none;
  }
  .sticky-container .sticky:focus {
	outline: none;
  }
  .sticky-container .sticky .close {
	font-size: 26px;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	width: 18px;
  }
  .sticky-container .sticky .close:active {
	transform: scale(0.98);
  }
  @keyframes stickAnim {
	0% {
	  transform: scale(5);
	}
	100% {
	  transform: scale(1);
	}
  }
 `

//  https://codepen.io/bbredewold/pen/xbPqoZ
// https://codepen.io/nocni_sovac/pen/KKprrdr