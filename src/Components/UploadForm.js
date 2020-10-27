import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import {FaPlusCircle} from 'react-icons/fa'

const UploadForm = () =>{

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const [caption,setCaption] = useState(null);

    const types=['image/png','image/jpeg','image/jpg']

    const handleChange = (e) => {
        let selected = e.target.files[0];
    
        if (selected && types.includes(selected.type)) {
          setFile(selected);
          setError('');
        } else {
          setFile(null);
          setError('Please select an image file (png or jpg)');
        }
    };

    return (
        <form>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="captionKeeper" onChange={event => setCaption(event.target.value)} value={caption} placeholder="Please enter a caption ... " required/>
            <small id="captionHelp" className="text-muted unselectable">Please describe the image going to be uploaded</small>
        </div>
        <label style={{display:"inline-block"}}>
          <input type="file" onChange={handleChange} disabled={!caption}/>
          <FaPlusCircle className="clickable" color={!caption?"#ddd":""} />
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar file={file} setFile={setFile} caption={caption} setCaption={setCaption}/> }
        </div>
      </form>
    )
}

export default UploadForm;