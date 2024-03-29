import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import UploadForm from "../../Components/UploadTalkForm";
import Footer from "../../Components/Footer";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import useFirestore from '../../hooks/useEzStore';
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
label:not(.btn){
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

const TalksAdmin = () => {
  const [selectedOpt,setSelectedOpt] = useState("New");
  const firestore = useFirestore();
  const [publications, setDocument] = useState();
  
  useEffect(()=>{
    let isSubscribed = true;

    firestore.getCollection('talks',
    (snap) => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data(), id: doc.id});
      });
      if (isSubscribed){
      setDocument(documents);
    }
    }
    );
    // unsubscribe();
    return () => (isSubscribed = false)
  },[])
  
  return (
    <>
    <Title>
    <h2>Talks - Admin</h2>
    <p>Add new talks to the showcase !!</p>
    <Dropdown options={["New"].concat(_.map(publications, 'title'))} onChange={event=>{setSelectedOpt(event.value)}} value={selectedOpt} placeholder="Select an option" />
    {(publications&&selectedOpt!=="New") && <UploadForm setSelectedOpt={setSelectedOpt} selectedOpt={selectedOpt} publications={publications}/>}
    {(publications&&selectedOpt==="New") && <UploadForm setSelectedOpt={setSelectedOpt} selectedOpt={selectedOpt}/>}
    {selectedOpt!=="New"&&
      <button className="btn mb-3 btn-primary btn-danger" onClick={()=>{firestore.deleteDocument("talks",_.find(publications,['title',selectedOpt]).id);setSelectedOpt("New")}}>Delete</button>
    }
    </Title>
    <Footer/>
    </>
  )
}

export default TalksAdmin;