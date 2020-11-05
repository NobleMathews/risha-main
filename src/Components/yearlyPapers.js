import React from 'react'
import { motion } from 'framer-motion';
import {authors} from "../data"
import {Link} from 'react-router-dom';

const YearlyPapers = ({year,docs}) =>{
    return (
        <>
        {docs && docs
        .filter(function (a) { return a.createdAt.toDate().getFullYear()===year })
        .map(doc => (
        <motion.div className="row" key={doc.id} 
          whileHover={{ opacity: 1 }}s
        >
          <div className="col-3 my-3">
            <motion.img src={doc.url} alt="publication_img"
            className="img-thumbnail"
            style={{width:"100%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            />
          </div>
          <div className="col-9" style={{display:"flex",alignItems:"center"}} >
          <div className="container">
            <div className="text-muted">
            {doc.authors.split(",").map((key) => (
            <Link
            className="preserveb pr-2"
              to={{
                pathname: `/info/${key}`,
                state: { modal: true }
              }}
            >
            {authors.find(method => method.key === key)&& `[${authors.find(method => method.key === key).title}]`}
            </Link>
            ))}
            </div>
            <p className="mb-0"><a className="preserveb font-weight-bold" href={doc.direct} target="_blank">{doc.title}</a></p>
            <p className="mb-1" >{doc.venue}</p>
            <div className="text-muted">
            {doc.links.split(']')
          .filter(function(str) {
            return /\S/.test(str);
          })
          .map((link) => (
            <a  className="preserveb pr-2" href={link.split('[').pop().split(']')[0]} target="_blank">{`[${link.split('[')[0]}]`}</a>
            ))}
            </div>
          </div>
          </div>
        </motion.div>
        ))}   
        </>
    )
}

export default YearlyPapers;