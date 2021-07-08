import React, { useState,useEffect } from 'react'
import ProgressBar from './ProgressBarTalk';
import {FaPlusCircle} from 'react-icons/fa'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import {categories, authors} from '../data';
import { Multiselect } from 'multiselect-react-dropdown'; 

const UploadForm = ({setSelectedOpt,selectedOpt,publications}) =>{
  let publication={};
  const authid_array = authors.map((value) => value.key);

  const [file,setFile] = useState(null);
  const [error,setError] = useState(null);
  const [title,setTitle] = useState("");
  const [id,setId] = useState("");
  const [direct,setDirect] = useState("");

  const [authorsi,setAuthors] = useState("");
  const [authors_opt,setAuthorsOpt] = useState([]);

  const [venue,setVenue] = useState("");
  const [imgText,setImgText] = useState("");
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
      setAuthorsOpt(publication?publication.authors.split(",").map(function (value) {
        return value.trim();
      }):[]);
      setVenue(publication?publication.venue:"");
      setImgText(publication?publication.url:"");
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
      setImgText("");
      setAuthors("");
      setAuthorsOpt([]);
      setDirect("");
      setPubDate(new Date());
      setBypass(false);
      setId("");
      setOptions(new Set());
    }

    // check if an element exists in array using a comparer function
    // comparer : function(currentElement)
    Array.prototype.inArray = function(comparer) { 
      for(var i=0; i < this.length; i++) { 
          if(comparer(this[i])) return true; 
      }
      return false; 
    }; 

    // adds an element to the array if it does not already exist using a comparer 
    // function
    Array.prototype.pushIfNotExist = function(element, comparer) { 
      if (!this.inArray(comparer)) {
          this.push(element);
      }
    };

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
    const onSelect = (selectedList, selectedItem)=>{
      if(!selectedList.includes(selectedItem)) selectedList.push(selectedItem);
      setAuthorsOpt(selectedList);
      setAuthors(selectedList.join(","));
    }
    const onRemove = (selectedList, selectedItem)=>{
      if(selectedList.includes(selectedItem)) selectedList = selectedList.filter(function(item) {
        return item !== selectedItem
      })
      setAuthorsOpt(selectedList);
      setAuthors(selectedList.join(","));
    }
// update methods | separate admin page for author data to finally make multi dropdown
    return (
        <form>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            <input type="text" className="form-control" id="titleKeeper" name="title" onChange={event => setTitle(event.target.value)} value={title} placeholder="Please enter Talk title / short info ... " required/>
            <small className="text-muted unselectable">Title of Talk</small>
        </div>
        <div className="form-group mx-auto" style={{width:"75%"}}>
            
            {/* <input type="text" className="form-control" id="AuthKeeper" name="authors" onChange={event => setAuthors(event.target.value)} value={authorsi} placeholder="Please enter authors as per id registered (csv)" required/> */}
            <input type="text" className="form-control" id="AuthKeeper" name="authors" value={authorsi} placeholder="Please enter authors as per id registered (csv)" readOnly/>
            
            <Multiselect isObject={false} options={authid_array} key={authors_opt.length||0} 
              onSelect={onSelect}
              onRemove={onRemove}
              selectedValues={authors_opt}
              placeholder="Author List"
            />
            <small className="text-muted unselectable">Authors Details</small>
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
          <div className="form-group mx-auto" style={{width:"75%"}}>
              {imgText&&
              <img style={{height:"100px"}} src={imgText}/>
              }
              <input type="text" className="form-control" id="venueKeeper" name="text_img" onChange={event => setImgText(event.target.value)} value={imgText} placeholder="Image link" readOnly/>
              <small className="text-muted unselectable">Use button below only if you want to bypass new image upload - adding an external url for image is disabled contact admin to enable</small>
          </div>
          <input disabled={!(title)} type="checkbox" onChange={event => setBypass(!imgBypass)} checked={imgBypass} className="form-check-input hidden" id="exampleCheck1"name="exampleCheck1"/>
          <label className="btn btn-outline-primary" htmlFor="exampleCheck1">Bypass field check and Submit</label>
        </div>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { (file||imgBypass) && <ProgressBar imgBypass={imgBypass} imgText={imgText} selectedOpt={id?id:selectedOpt} file={file} setFile={setFile} direct={direct} createdAt={pubDate} title={title} authors={authorsi} links={links} venue={venue} selectedTags={Array.from(selectedOptions)} setReset={reset}/> }
        </div>
      </form>
    )
}

export default UploadForm;