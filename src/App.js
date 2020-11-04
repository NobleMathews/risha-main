import React,{ Component } from 'react';
import {BrowserRouter as Router,Switch,Route,withRouter} from "react-router-dom";
import Main from './Pages/Main'
import Publications from './Pages/Publications';
import Lab from './Pages/Lab';
import Talks from './Pages/Talks';
import Press from './Pages/Press';
import GalleryAdmin from './Pages/admin/Title';
import PubAdmin from './Pages/admin/PubAdmin';
import Login from './Pages/admin/Admin';
import PrivateRoute from './firebase/PrivateRoute';
import Gallery from './Pages/Gallery';
import Modal from './Components/authorModal';

class App extends Component {
  constructor(props){
    super(props);
    this.previousLocation = this.props.location;
  }
  
  componentWillUpdate() {
    const { location } = this.props;
    if (!(location.state && location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }  
  render() {    
    const { location } = this.props;
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )
    return (
      <div className="App">
        <Switch location={isModal ? this.previousLocation : location}>
          <PrivateRoute path="/admin/publications" component={PubAdmin} />
          <PrivateRoute path="/admin/gallery" component={GalleryAdmin} />
          <Route path="/publications" component={Publications} />
          <Route path="/lab" component={Lab} />
          <Route path="/talks" component={Talks} />
          <Route path="/news" component={Press} />
          <Route path="/gallery" component={Gallery} />
          <Route exact path="/" component={Main} />
          <Route exact path="/modal/:id" component={Modal} />
          <Route path="/admin" component={Login} />
        </Switch>
        {isModal?
        <Route exact path="/modal/:id" component={Modal} >
          <Modal isModal />
        </Route>
        : null
      }
      </div>
    );
  }
}

export default withRouter(App);
