import React, { useEffect } from 'react';
import useStorage from '../hooks/useStoragePub'

const ProgressBar=({file,setFile,title,authors,links,venue,setReset})=>{
    const {url,progress}=useStorage(file,title,authors,links,venue);

    useEffect(()=>{
        if(url){
            setFile(null);
            setReset();
        }
    },[url,setFile]);
    
    return(
    <div className="progress-bar unselectable" style={{width:progress+'%'}}></div>
    )
}

export default ProgressBar;