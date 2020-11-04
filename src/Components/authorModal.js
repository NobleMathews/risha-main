import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
const sauce = "./assets/team/";
// src={require('./images/timer.png')} />
class authModal extends Component {
    constructor(props){
      super(props);
    }
    render(){
return(
<>
  <div
    role="button"
    className="fade modal-backdrop show"
    onClick={() => this.props.history.goBack()}
  />
  <div class="modal-dialog" role="document">
  <div class="modal-content" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={() => this.props.history.goBack()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
    </div>
  </>
);    
}
};

export default withRouter(authModal);
