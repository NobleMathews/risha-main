import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import {authors,value} from "../data";
import {AiOutlineMail} from 'react-icons/ai';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';

class authModal extends Component {
    constructor(props){
      super(props);
    }
    render(){
    const id = this.props.match.params.id;
    const author = authors.find(method => method.key === id);

    return(
      <div
        role="button"
        className="fade modal-backdrop show specialModal"
        onClick={() => this.props.history.goBack()}
      >
      <div class="modal-dialog" role="document">
      <div class="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
          <img className="rounded-circle mx-auto" src={require("../assets/team/"+author.key+".jpg").default} alt="thumb" style={{height:"70px"}}/>
            <div style={{flexDirection:"column"}}>
              <h5 class="modal-title">{author.title}</h5>
              <h6 class="muted">{value[author.value]}</h6>
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
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
        </div>
        </div>
    );    
    }
};

export default withRouter(authModal);
