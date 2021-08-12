import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import {authors,value,alumini} from "../data";
import {AiOutlineMail} from 'react-icons/ai';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

class authModal extends Component {
    constructor(props){
      super(props);
    }
    render(){
    const id = this.props.match.params.id;
    const author = authors.find(method => method.key === id);
    const isAlumini = alumini.find(method => method.key === id);
    const alum = isAlumini?" (Alumini) ":"";

    return(
      <div
        role="button"
        className="fade modal-backdrop show specialModal"
        onClick={() => this.historyMethod()}
      >
      <FadeIn>
      <div className="modal-dialog" role="document">
      <div className="modal-content mylight" onClick={e => e.stopPropagation()}>
      <FadeIn>
        <div className="modal-header">
          {/* require("/images/team/default.jpg").default */}
          <img className="rounded-circle mx-auto" src={"/images/team/"+author.key+".jpg"} alt="thumb" style={{height:"70px"}} onError={ (e) => e.target.src = '/images/team/default.jpg' }/>
            <div style={{flexDirection:"column"}}>
              <h5 className="modal-title">{author.title}</h5>
              <h6 className="muted">{`${value[author.value]} ${alum}`}</h6>
              <small style={{display:'block'}}>{!isAlumini?`Currently Working on ${author.desc}`:`Career Path: ${author.desc}`}</small>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip">
                    {author.email}
                  </Tooltip>
                }
              >
              <a href={"mailto:"+author.email} target="_blank">Contact : <AiOutlineMail/></a>
              </OverlayTrigger>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={() => this.historyMethod()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          </FadeIn>
          <div className="modal-footer">
          {author.links?.split('\n')
          .filter(function(str) {
            return /\S/.test(str);
          })
          .map((link) => (
            <FadeIn>
            <a type="button" href={link.split('[').pop().split(']')[0]} className="btn btn-outline" style={{border:"solid"}} target="_blank">{link.split('[')[0]}</a>
            </FadeIn>
            ))}
          </div>
        </div>
        </div>
        </FadeIn>
        </div>
    );    
    }

  historyMethod() {
    if(this.props.history.length>2)
    return this.props.history.goBack();
    else
    return this.props.history.push("/publications");
  }
};

export default withRouter(authModal);
