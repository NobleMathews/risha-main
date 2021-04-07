import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components'
import Footer from "../../Components/Footer";
import useFirestore from '../../hooks/useEzStore';
import AddOpenForm from './forms/AddOpenForm'
import EditOpenForm from './forms/EditOpenForm'
import OpenTable from './tables/OpenTable'
var _ = require('lodash');

const Title = styled.div`

  width:80%;
  margin: 0 auto;

  :root{
    --primary: #efb6b2;
    --secondary: #4e4e4e;
    --error: #ff4a4a;
  }
  h1{
    color: #efb6b2!important;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }
  h2,p{
    text-align: center;
  }
  h2{
    margin-top: 60px;
    font-size: 2.6rem;
  }

  /* upload form styles */
form{
  margin: 30px auto 10px;
  text-align: center;
}
label input{
  display: none;
}
label{
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 0 !important;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
  font-size: 32px;
}

label span{
  display: inline-block;
  vertical-align:top;
}

label:hover{
  color: #F65314;
}
.output{
  height: 60px;
  font-size: 0.8rem;
}
.error{
  color: var(--error);
}

`;

export default function OpenAdmin() {
  const firestore = useFirestore();
  // const [openData, setDocument] = useState([]);

  const initialFormState = { id: null, skill: '', extra: '', desc: '' }

  // Setting state
	const [ open, setOpen ] = useState([])
	const [ currentOpen, setCurrentOpen ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addOpen = iopen => {
		// open.id = open.length + 1
		// setOpen([ ...open, iopen ])
    firestore.saveCollection('open',iopen);
	}

	const deleteOpen = id => {
		setEditing(false)
		// setOpen(open.filter(open => open.id !== id))
    firestore.deleteDocument('open', id);
	}

	const updateOpen = (id, updatedOpen) => {
		setEditing(false)
		setOpen(open.map(open => (open.id === id ? updatedOpen : open)))
    firestore.saveDocument( 'open',id,updatedOpen);
	}

	const editRow = open => {
		setEditing(true)
		setCurrentOpen({ id: open.id, desc: open.desc, skill: open.skill, extra: open.extra })
	}

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
    <>
    <Title>
    <h2>Open Positions - Admin</h2>
    <p>Add more open positions so students can apply !!</p>
    <div className="container">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Job</h2>
							<EditOpenForm
								editing={editing}
								setEditing={setEditing}
								currentOpen={currentOpen}
								updateOpen={updateOpen}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Job</h2>
							<AddOpenForm addOpen={addOpen} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2 style={{paddingBottom:"15px"}}>View Open Positions</h2>
					<OpenTable open={open} editRow={editRow} deleteOpen={deleteOpen} />
				</div>
			</div>
		</div>
    </Title>
    <Footer/>
    </>
  )
}