import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/useEzStore';
import slamCoverr from './slamimg/border2r.png'
import slamCoverl from './slamimg/border2l.png'
import FadeIn from 'react-fade-in';
import Footer from "../Components/Footer";

export default function Slam() {
	// const firestore = useFirestore();
	// const [ open, setOpen ] = useState([])

	// useEffect(()=>{
	// 	let isSubscribed = true;
	
	// 	firestore.getCollection('open',
	// 	(snap) => {
	// 	  let documents = [];
	// 	  snap.forEach(doc => {
	// 		documents.push({id: doc.id, desc:doc.data().desc, skill:doc.data().skill, extra: doc.data().extra});
	// 	  });
	// 	  if (isSubscribed){
	// 	  setOpen(documents);
	// 	}
	// 	}
	// 	);
	// 	return () => (isSubscribed = false)
	//   },[])
	var image = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
	var random  = Math.floor(Math.random()*7)-3;
	var random2 = Math.floor(Math.random()*7)-3;
	var random3 = Math.floor(Math.random()*7)-3; 
    function randomNumber(min, max) { 
		return Math.random() * (max - min) + min; 
	}

  return (
	<>
	<Section>
	<div className="container">
		{/* <div className="row">
        <h1>Woof</h1>
		</div> */}
        <div className="row">
		<div className="col-9">
        <h3>The Risha Slambook</h3>
		<hr/>
		<FadeIn>
		<div className="d-flex bd-highlight align-items-center">
		<div className="p-2 flex-grow-1" style={{textAlign:"left"}}>
		<p><b>Name:</b> Noble Saji Mathews</p>
		<p><b>Birth Date:</b> 22 March 2001</p>
		<p><b>Current Location:</b> IIT Tirupati</p>
		</div>
		<div  className="p-2 foto" style={{background:`#fff url(${image}) no-repeat center`,transform:`rotate(${random}deg) translate(${random2}px, ${random3}px)`}}></div>
		</div>
		{/* <div className="d-flex bd-highlight align-items-center"> */}
		<>
		<div className="sticky-container mb-3">
		<div className="sticky" style={{transform:`rotate(${randomNumber(-3,3)}deg)`,filter:`hue-rotate(${randomNumber(1,720)}deg)`}} role="textbox"> Other Comments</div>
		<div className="sticky" style={{transform:`rotate(${randomNumber(-3,3)}deg)`,filter:`hue-rotate(${randomNumber(1,720)}deg)`}} role="textbox"> Sirs Comments</div>
		</div>
		<div className="p-2" style={{textAlign:"left"}}>
		<p><b>What was he most memorable thing for you as a part of Risha Lab ?</b></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien augue, rutrum sollicitudin turpis sit amet, vehicula ullamcorper nibh. Ut vel nibh sem. Morbi facilisis quis diam et sagittis. Pellentesque quis egestas nulla. Suspendisse rhoncus mollis felis nec posuere. Sed sed nulla nunc. Nam aliquam neque vel ipsum volutpat, eu facilisis nibh tristique. Mauris ut mollis tortor. Morbi vestibulum est ut diam sagittis blandit. Nullam tincidunt lacus sed tortor condimentum, id tincidunt ex tincidunt. Mauris mauris metus, pharetra sagittis diam quis, iaculis dignissim tellus. Mauris interdum tellus nec orci iaculis eleifend. Donec sed porta eros. Vestibulum nisi mi, mollis sit amet quam id, malesuada blandit tortor. Sed elit justo, rutrum non mollis sit amet, ultrices in ligula.</p>
		<p><b>Any things that you feel you got to experience only because of your time here ?</b></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien augue, rutrum sollicitudin turpis sit amet, vehicula ullamcorper nibh. Ut vel nibh sem. Morbi facilisis quis diam et sagittis. Pellentesque quis egestas nulla. Suspendisse rhoncus mollis felis nec posuere. Sed sed nulla nunc. Nam aliquam neque vel ipsum volutpat, eu facilisis nibh tristique. Mauris ut mollis tortor. Morbi vestibulum est ut diam sagittis blandit. Nullam tincidunt lacus sed tortor condimentum, id tincidunt ex tincidunt. Mauris mauris metus, pharetra sagittis diam quis, iaculis dignissim tellus. Mauris interdum tellus nec orci iaculis eleifend. Donec sed porta eros. Vestibulum nisi mi, mollis sit amet quam id, malesuada blandit tortor. Sed elit justo, rutrum non mollis sit amet, ultrices in ligula.</p>
		<p><b>If you headed Risha Lab, what changes would you make ?</b></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien augue, rutrum sollicitudin turpis sit amet, vehicula ullamcorper nibh. Ut vel nibh sem. Morbi facilisis quis diam et sagittis. Pellentesque quis egestas nulla. Suspendisse rhoncus mollis felis nec posuere. Sed sed nulla nunc. Nam aliquam neque vel ipsum volutpat, eu facilisis nibh tristique. Mauris ut mollis tortor. Morbi vestibulum est ut diam sagittis blandit. Nullam tincidunt lacus sed tortor condimentum, id tincidunt ex tincidunt. Mauris mauris metus, pharetra sagittis diam quis, iaculis dignissim tellus. Mauris interdum tellus nec orci iaculis eleifend. Donec sed porta eros. Vestibulum nisi mi, mollis sit amet quam id, malesuada blandit tortor. Sed elit justo, rutrum non mollis sit amet, ultrices in ligula.</p>
		<p><b>Did you enjoy your time here overall, what all inspired you and do you have any regrets of not having done something ?</b></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien augue, rutrum sollicitudin turpis sit amet, vehicula ullamcorper nibh. Ut vel nibh sem. Morbi facilisis quis diam et sagittis. Pellentesque quis egestas nulla. Suspendisse rhoncus mollis felis nec posuere. Sed sed nulla nunc. Nam aliquam neque vel ipsum volutpat, eu facilisis nibh tristique. Mauris ut mollis tortor. Morbi vestibulum est ut diam sagittis blandit. Nullam tincidunt lacus sed tortor condimentum, id tincidunt ex tincidunt. Mauris mauris metus, pharetra sagittis diam quis, iaculis dignissim tellus. Mauris interdum tellus nec orci iaculis eleifend. Donec sed porta eros. Vestibulum nisi mi, mollis sit amet quam id, malesuada blandit tortor. Sed elit justo, rutrum non mollis sit amet, ultrices in ligula.</p>
		<p><b>Any thing you would like to share with a fresher based on your experiences ?</b></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien augue, rutrum sollicitudin turpis sit amet, vehicula ullamcorper nibh. Ut vel nibh sem. Morbi facilisis quis diam et sagittis. Pellentesque quis egestas nulla. Suspendisse rhoncus mollis felis nec posuere. Sed sed nulla nunc. Nam aliquam neque vel ipsum volutpat, eu facilisis nibh tristique. Mauris ut mollis tortor. Morbi vestibulum est ut diam sagittis blandit. Nullam tincidunt lacus sed tortor condimentum, id tincidunt ex tincidunt. Mauris mauris metus, pharetra sagittis diam quis, iaculis dignissim tellus. Mauris interdum tellus nec orci iaculis eleifend. Donec sed porta eros. Vestibulum nisi mi, mollis sit amet quam id, malesuada blandit tortor. Sed elit justo, rutrum non mollis sit amet, ultrices in ligula.</p>
		</div>
		{/* </div> */}
		</>
		</FadeIn>
		</div>
        <div className="col-3">
        <h3>Index</h3>
        <hr/>
		<FadeIn>
		<a style={{display:"block",fontWeight:"bold"}}>↠ Noble</a>
		<a style={{display:"block"}}>↠ Another</a>
		<a style={{display:"block"}}>↠ Whoop</a>
		<a style={{display:"block"}}>↠ Not Noble</a>
		<a style={{display:"block"}}>↠ NSM</a>
		<a style={{display:"block"}}>↠ Test</a>
		</FadeIn>
		<hr/>
        <a style={{fontWeight:"bold"}}>Enter your own experiences</a>
        </div>
		</div>
	</div>
	</Section>
	<Footer/>
	</>
);
}

 const Section = styled.div`

 @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');

 font-family: 'Indie Flower', cursive !important;
 font-size: larger;

 .col-9{
    border: 30px solid transparent;
    padding: 15px;
    border-image: url(${slamCoverr}) 320 round;
 }

 .col-3{
    border: 30px solid transparent;
    padding: 15px;
    border-image: url(${slamCoverl}) 320 round;
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