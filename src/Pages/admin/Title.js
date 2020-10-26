import React from 'react';
import styled from 'styled-components'
import UploadForm from "../../Components/UploadForm";

const Title = styled.div`
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
  return (
    <Title>
      <h1>#weAreRisha</h1>
      <h2>Main Gallery - Admin</h2>
      <p>Upload images to be displayed in mainpage gallery </p>
      <UploadForm />
    </Title>
  )
}

export default GalleryAdmin;