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
// update methods | separate admin page for author data to finally make multi dropdown
    return (
        <form>
        <div class="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="titleKeeper" onChange={event => setCaption(event.target.value)} value={caption} placeholder="Please enter Paper / Publication Title ... " required/>
            <small id="titleHelp" className="text-muted unselectable">Title of Paper / Publication</small>
        </div>
        {/* multi list of authors */}
        <div class="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="captionKeeper" onChange={event => setCaption(event.target.value)} value={caption} placeholder="Venue / Conference / Journal as applicable ... " required/>
            <small id="captionHelp" className="text-muted unselectable">Add venue where work was presented / published</small>
        </div>
        <div class="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="captionKeeper" onChange={event => setCaption(event.target.value)} value={caption} placeholder="Custom links to checkout work / paper / demo" required/>
            <small id="captionHelp" className="text-muted unselectable">Custom Eg. ' Arxiv[https...],Youtube[link...],Code[github.link...] ' </small>
        </div>
        <div class="form-group mx-auto" style={{width:"75%"}}>
            <small id="captionHelp" className="text-muted unselectable">Add one image to represent your work</small>
        </div>
        <label>
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