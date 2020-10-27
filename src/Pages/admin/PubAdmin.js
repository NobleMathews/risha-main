import React, { useState } from 'react';
import styled from 'styled-components'
import UploadForm from "../../Components/UploadPubForm";
import Footer from "../../Components/Footer"

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

const GalleryAdmin = () => {
  const [selectedOpt,setSelectedOpt] = useState(0);
  return (
    <>
    <Title>
      <h2>Publications - Admin</h2>
      <p>Add new publications to the showcase !!</p>
      <UploadForm />
    </Title>
    <Footer/>
    </>
  )
}

export default GalleryAdmin;