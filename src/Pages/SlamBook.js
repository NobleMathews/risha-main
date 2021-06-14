import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/useEzStore';
import slamCoverr from './slamimg/border2r.png'
import slamCoverl from './slamimg/border2l.png'

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

  return (
	<Section>
	<div className="container">
		{/* <div className="row">
        <h1>Woof</h1>
		</div> */}
        <div className="row">
		<div className="col-9">
        <h3>The Risha Slambook</h3>
		</div>
        <div className="col-3">
        <b>Index</b>
        <hr/>
        <a>Enter your own experiences</a>
        </div>
		</div>
	</div>
	</Section>
);
}

 const Section = styled.div`
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
 `

//  https://codepen.io/bbredewold/pen/xbPqoZ
// https://codepen.io/nocni_sovac/pen/KKprrdr