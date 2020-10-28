import {Modal} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
var gfm = require('remark-gfm') 

const MainModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='col-10 modal-title text-center'>
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
          <ReactMarkdown plugins={[gfm]}>{props.body}</ReactMarkdown>
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  export default MainModal;