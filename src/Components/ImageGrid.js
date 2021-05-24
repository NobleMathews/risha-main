import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
var _ = require('lodash');

const ImageGrid = ({ setSelectedImg, setSelectedKey, setSelectedCaption }) => {
  const { docs } = useFirestore('gallery');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => {setSelectedImg(doc.url);setSelectedKey(doc.id);setSelectedCaption(doc.caption);}}
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;
