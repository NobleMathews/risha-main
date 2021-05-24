import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../hooks/useEzStore';

const Modal = ({ setSelectedImg, selectedCaption, setSelectedCaption, selectedImg, selectedKey, setSelectedKey, isEdit }) => {

  const firestore = useFirestore();
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg("");
      setSelectedKey("");
      setSelectedCaption("");
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" style={{margin:"10px auto"}}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <p style={{color:"white",fontWeight:"bolder"}}>{selectedCaption}</p>
      {isEdit &&
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e)=>{e.preventDefault(); firestore.deleteDocument("gallery",selectedKey); setSelectedImg(""); setSelectedKey(""); setSelectedCaption("");}}
        >
          Delete
        </motion.button>
      }
    </motion.div>
  )
}

export default Modal;