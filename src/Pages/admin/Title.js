import React, { useState } from 'react';
import styled from 'styled-components'
import ImageGrid from '../../Components/ImageGrid';
import Modal from '../../Components/Modal';
import UploadForm from "../../Components/UploadForm";

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
`;

const GalleryAdmin = () => {
  const [selectedImg,setSelectedImg] = useState(null);
  return (
    <Title>
      <h1>#weAreRisha</h1>
      <h2>Main Gallery - Admin</h2>
      <p>Upload images to be displayed in mainpage gallery </p>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg&& <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </Title>
  )
}

export default GalleryAdmin;