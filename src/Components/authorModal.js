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
        onClick={() => this.props.history.goBack()}
      >
      <FadeIn>
      <div className="modal-dialog" role="document">
      <div className="modal-content mylight" onClick={e => e.stopPropagation()}>
      <FadeIn>
        <div className="modal-header">
          <img className="rounded-circle mx-auto" src={require("../assets/team/"+author.key+".jpg").default} alt="thumb" style={{height:"70px"}}/>
            <div style={{flexDirection:"column"}}>
              <h5 className="modal-title">{author.title}</h5>
              <h6 className="muted">{`${value[author.value]} ${alum}`}</h6>
              <small style={{display:'block'}}>Currently Working on {author.desc}</small>
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
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={() => this.props.history.goBack()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          </FadeIn>
          <div className="modal-footer">
          {author.links.split('\n')
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
};

export default withRouter(authModal);
