import React, { useState,useEffect } from 'react'
import ProgressBar from './ProgressBarTalk';
import {FaPlusCircle} from 'react-icons/fa'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const UploadForm = ({setSelectedOpt,selectedOpt,publications}) =>{
  let publication={};

  const [file,setFile] = useState(null);
  const [error,setError] = useState(null);
  const [title,setTitle] = useState("");
  const [id,setId] = useState("");
  const [direct,setDirect] = useState("");
  const [authors,setAuthors] = useState("");
  const [venue,setVenue] = useState("");
  const [links,setLinks] = useState("");
  const [pubDate, setPubDate] = useState(new Date());
  const [imgBypass, setBypass] = useState(false);

  useEffect( () => {
    if(publications){
      publication=publications.find(o => o.title === selectedOpt);
      setTitle(publication?publication.title:"");
      setDirect(publication?publication.direct:"");
      setAuthors(publication?publication.authors:"");
      setVenue(publication?publication.venue:"");
      setLinks(publication?publication.links:"");
      setPubDate(publication?publication.createdAt.toDate():new Date());
      setId(publication?publication.id:"")
    }
  }, [selectedOpt])

    function reset(){
      setSelectedOpt("New");
      setTitle("");
      setLinks("");
      setVenue("");
      setAuthors("");
      setDirect("");
      setPubDate(new Date());
      setBypass(false);
      setId("");
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
            <input type="text" className="form-control" id="titleKeeper" name="title" onChange={event => setTitle(event.target.value)} value={title} placeholder="Please enter Talk title / short info ... " required/>
            <small className="text-muted unselectable">Title of Talk</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="AuthKeeper" name="authors" onChange={event => setAuthors(event.target.value)} value={authors} placeholder="Please enter comma separated speakers" required/>
            <small className="text-muted unselectable">Speaker</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="venueKeeper" name="venue" onChange={event => setVenue(event.target.value)} value={venue} placeholder="Venue as applicable ... " required/>
            <small className="text-muted unselectable">Add venue for talk</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="directKeeper" name="direct" onChange={event => setDirect(event.target.value)} value={direct} placeholder="Direct link to check out talk" required/>
            <small className="text-muted unselectable">Direct link to talk</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <small className="text-muted unselectable">Date of talk (used for order) </small>
            <DatePicker selected={pubDate} onChange={date => setPubDate(date)} className="mx-2"/> 
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="captionKeeper" name="links" onChange={event => setLinks(event.target.value)} value={links} placeholder="Custom links to checkout work / paper / demo" required/>
            <small className="text-muted unselectable">Custom Eg. ' Youtube[link...] Public-GDrive[link...] ' </small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <small className="text-muted unselectable">Add one image to represent your work</small>
        </div>
        <label style={{display:"inline-block"}}>
          <input type="file" onChange={handleChange} disabled={!(title&&authors&&venue&&direct&&pubDate)}/>
          <FaPlusCircle className="clickable" color={!(title&&authors&&venue&&direct&&pubDate)?"#ddd":""} />
        </label>
        <div className="form-check">
          <input type="checkbox" onChange={event => setBypass(!imgBypass)} checked={imgBypass} className="form-check-input" id="exampleCheck1"/>
        </div>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { (file||imgBypass) && <ProgressBar imgBypass={imgBypass} selectedOpt={id?id:selectedOpt} file={file} setFile={setFile} direct={direct} createdAt={pubDate} title={title} authors={authors} links={links} venue={venue} setReset={reset}/> }
        </div>
      </form>
    )
}

export default UploadForm;