import React, { useEffect } from 'react';
import useStorage from '../hooks/useStoragePub'

const ProgressBar=({imgBypass,selectedOpt,file,setFile,direct,createdAt,title,authors,links,venue,setReset})=>{
    const {url,progress}=useStorage(imgBypass,selectedOpt,file,title,direct,createdAt,authors,links,venue);

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