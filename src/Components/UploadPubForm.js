import React, { useState,useEffect } from 'react'
import ProgressBar from './ProgressBarPub';
import {FaPlusCircle} from 'react-icons/fa'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import {categories} from '../data';

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
  const [selectedOptions, setOptions] = useState(new Set());

  useEffect( () => {
    if(publications){
      publication=publications.find(o => o.title === selectedOpt);
      setTitle(publication?publication.title:"");
      setDirect(publication?publication.direct:"");
      setAuthors(publication?publication.authors:"");
      setVenue(publication?publication.venue:"");
      setLinks(publication?publication.links:"");
      setPubDate(publication?publication.createdAt.toDate():new Date());
      setId(publication?publication.id:"");
      setOptions(publication?new Set(publication.selectedTags):new Set());
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
      setOptions(new Set());
    }


    const types=['image/png','image/jpeg','image/jpg']

    const handleOptionsSelected = event => {
      // Since we cannot mutate the state value directly better to instantiate new state with the values of the state
      const opts = new Set(selectedOptions);
  
      if (opts.has(event.target.name)) {
        opts.delete(event.target.name);
        setOptions(opts);
      } else {
        opts.add(event.target.name);
        setOptions(opts);
      }

    };

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
          <table className = "table">
          <tbody>
          <tr className = "active">
            {categories.map((category, index) => {
              return(
                <th key={index}>
                <div className = "radio">
                    <input type="radio" 
                    name={category}
                    onChange={()=>{return;}}
                    checked={selectedOptions.has(category)}
                    onClick={handleOptionsSelected}
                    />{category}
                </div>
              </th>
              );
            })
            }
          </tr>
          </tbody>
          </table>
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
          <input type="file" onChange={handleChange} disabled={!(title&&authors&&venue&&direct&&pubDate)}/>
          <FaPlusCircle className="clickable" color={!(title&&authors&&venue&&direct&&pubDate)?"#ddd":""} />
        </label>
        <div className="form-check">
          <input type="checkbox" onChange={event => setBypass(!imgBypass)} checked={imgBypass} className="form-check-input" id="exampleCheck1"/>
        </div>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { (file||imgBypass) && <ProgressBar imgBypass={imgBypass} selectedOpt={id?id:selectedOpt} file={file} setFile={setFile} direct={direct} createdAt={pubDate} title={title} authors={authors} links={links} venue={venue} selectedTags={Array.from(selectedOptions)} setReset={reset}/> }
        </div>
      </form>
    )
}

export default UploadForm;