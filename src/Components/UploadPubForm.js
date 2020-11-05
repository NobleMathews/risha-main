import React, { useState } from 'react'
import ProgressBar from './ProgressBarPub';
import {FaPlusCircle} from 'react-icons/fa'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const UploadForm = ({selectedOpt,publications}) =>{

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const [title,setTitle] = useState(publications?publications.title:"");
    const [direct,setDirect] = useState(publications?publications.direct:"");
    const [authors,setAuthors] = useState(publications?publications.authors:"");
    const [venue,setVenue] = useState(publications?publications.venue:"");
    const [links,setLinks] = useState(publications?publications.links:"");
    const [pubDate, setPubDate] = useState(new Date());

    function reset(){
      setTitle("");
      setLinks("");
      setVenue("");
      setAuthors("");
      setDirect("");
      setPubDate(new Date());
    }


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
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="titleKeeper" name="title" onChange={event => setTitle(event.target.value)} value={title} placeholder="Please enter Paper / Publication Title ... " required/>
            <small className="text-muted unselectable">Title of Paper / Publication</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="AuthKeeper" name="authors" onChange={event => setAuthors(event.target.value)} value={authors} placeholder="Please enter authors as per id registered (csv)" required/>
            <small className="text-muted unselectable">Authors Temp</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="venueKeeper" name="venue" onChange={event => setVenue(event.target.value)} value={venue} placeholder="Venue / Conference / Journal as applicable ... " required/>
            <small className="text-muted unselectable">Add venue where work was presented / published</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="directKeeper" name="direct" onChange={event => setDirect(event.target.value)} value={direct} placeholder="Direct link to article on main host site" required/>
            <small className="text-muted unselectable">Direct link to publication / article</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <small className="text-muted unselectable">Date of publication (used for order) </small>
            <DatePicker selected={pubDate} onChange={date => setPubDate(date)} className="mx-2"/> 
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="captionKeeper" name="links" onChange={event => setLinks(event.target.value)} value={links} placeholder="Custom links to checkout work / paper / demo" required/>
            <small className="text-muted unselectable">Custom Eg. ' Arxiv[https...] Youtube[link...] Code[github.link...] ' </small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <small className="text-muted unselectable">Add one image to represent your work</small>
        </div>
        <label style={{display:"inline-block"}}>
          <input type="file" onChange={handleChange} disabled={title&&authors&&links&&venue}/>
          <FaPlusCircle className="clickable" color={!(title&&authors&&links&&venue)?"#ddd":""} />
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar selectedOpt={selectedOpt} file={file} setFile={setFile} direct={direct} createdAt={pubDate} title={title} authors={authors} links={links} venue={venue} setReset={reset}/> }
        </div>
      </form>
    )
}

export default UploadForm;