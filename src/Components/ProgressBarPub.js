import React, { useEffect } from 'react';
import useStorage from '../hooks/useStoragePub'

const ProgressBar=({imgBypass,selectedOpt,imgText,file,setFile,direct,createdAt,title,authors,links,venue,selectedTags,setReset})=>{
    const {url,progress}=useStorage(imgText,imgBypass,selectedOpt,file,title,direct,createdAt,authors,links,venue,selectedTags);
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