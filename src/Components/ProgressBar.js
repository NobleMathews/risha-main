import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage'

const ProgressBar=({file,setFile,caption,setCaption})=>{
    const {url,progress}=useStorage(file,caption);

    useEffect(()=>{
        if(url){
            setFile(null);
            setCaption('');
        }
    },[url,setFile]);
    
    return(
    <div className="progress-bar unselectable" style={{width:progress+'%'}}></div>
    )
}

export default ProgressBar;