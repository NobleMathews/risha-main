import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/useEzStore';

export default function Open() {
	const firestore = useFirestore();
	const [ open, setOpen ] = useState([])

	useEffect(()=>{
		let isSubscribed = true;
	
		firestore.getCollection('open',
		(snap) => {
		  let documents = [];
		  snap.forEach(doc => {
			documents.push({id: doc.id, desc:doc.data().desc, skill:doc.data().skill, extra: doc.data().extra});
		  });
		  if (isSubscribed){
		  setOpen(documents);
		}
		}
		);
		return () => (isSubscribed = false)
	  },[])

  return (
	<Section>
	<div className="container">
		<div className="row">
		<div className="col-md-10 offset-md-1">
			<ul className="job-list">
			{open?.length > 0 ? (
          open.map(open => (
			<li key={open.id} className="job-preview">
				<div className="content float-left" style={{textAlign:"left"}}>
				<h4 className="job-desc">
				{open.desc}
				</h4>
				<h6 className="skills">
				{open.skill}
				</h6>
				<small>{open.extra}</small>
				</div>
				<a href="/join" className="btn btn-apply float-sm-right float-xs-left">
				Apply
				</a>
			</li>
			))):<p>We are currently set for this academic cycle. But please do feel free to reach out to us with your proposals and we will get back to you !</p>}
			</ul>
		</div>
		</div>
	</div>
	</Section>
);
}

 const Section = styled.div`
 ul.job-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

ul.job-list > li.job-preview {
	background: var(--color-card);
	border: 1px solid #d7e2e9;
	-webkit-border-radius: 0.4rem;
	-moz-border-radius: 0.4rem;
	border-radius: 0.4rem;
	padding: 1.5rem 2rem;
	margin-bottom: 1rem;
	float: left;
	width: 100%;
	-webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
}

ul.job-list > li.job-preview:hover {
	cursor: pointer;
	-webkit-box-shadow: 0 3px 8px rgba(0,0,0,0.05);
	-moz-box-shadow: 0 3px 8px rgba(0,0,0,0.05);
	box-shadow: 0 3px 8px rgba(0,0,0,0.05);
}

.job-desc {
	margin-top: 0.6rem;
  color:var(--color-text-2);
}

.skills {
	color: var(--color-text-3);
}

.job-preview .btn {
	margin-top: 1.1rem;
}

.btn-apply {
	text-transform: uppercase;
	font-size: 0.875rem;
	font-weight: 800;
	letter-spacing: 1px;
	background-color: transparent;
	color:  var(--color-text);
	border: 2px solid var(--color-text);
	padding: 0.6rem 2rem;
	-webkit-border-radius: 2rem;
	-moz-border-radius: 2rem;
	border-radius: 2rem;
}

.btn-apply:hover {
	background-color: var(--color-code);
	color: var(--color-text);
}

@media (max-width: 575px) {
	.job-preview .content {
		width: 100%;
	}
}

 `