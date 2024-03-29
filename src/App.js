import React,{ Component } from 'react';
import {BrowserRouter as Router,Switch,Route,withRouter} from "react-router-dom";
import Main from './Pages/Main'
import Publications from './Pages/Publications';
import Slam from './Pages/SlamBook';
import Lab from './Pages/Lab';
import Join from './Pages/Join';
import Talks from './Pages/Talks';
import Press from './Pages/Press';
import Collaborators from './Pages/Collaborators';
import Blog from './Pages/Blog';
import GalleryAdmin from './Pages/admin/Title';
import NewsAdmin from './Pages/admin/NewsAdmin';
import Calendar from './Pages/Calendar';
import TalksAdmin from './Pages/admin/TalksAdmin'
import PubAdmin from './Pages/admin/PubAdmin';
import OpenAdmin from './Pages/admin/OpenAdmin'
import Login from './Pages/admin/Admin';
import Logo from './Pages/AboutLogo'
import PrivateRoute from './firebase/PrivateRoute';
import Gallery from './Pages/Gallery';
import Modal from './Components/authorModal';
import Professor from './Pages/Sridhar';
import Open from './Pages/Open';
import { AnimatedRoute } from 'react-router-transition';

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
          <PrivateRoute path="/admin/news" component={NewsAdmin} />
          <PrivateRoute path="/admin/talks" component={TalksAdmin} />
          <PrivateRoute path="/admin/open" component={OpenAdmin} />
          <PrivateRoute path="/admin/gallery" component={GalleryAdmin} />
          <Route path="/publications" component={Publications} />
          <Route path="/lab" component={Lab} />
          <Route path="/logo" component={Logo} />
          <Route path="/join" component={Join} />
          <Route path="/talks" component={Talks} />
          <Route path="/news" component={Press} />
          <Route path="/slam" component={Slam} />
          <Route path="/collaborations" component={Collaborators} />
          <Route path ="/blogs" component={Blog} />
          <Route path="/blog/:id" component={Blog}/>
          <Route path="/calendar" component={Calendar} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/ch" component={Professor} />
          <Route path="/open" component={Open} />
          <Route exact path="/" component={Main} />
          <Route exact path="/info/:id" component={Modal} />
          <Route path="/admin" component={Login} />
        </Switch>
        {/* {isModal?
        <Route exact path="/info/:id" component={Modal} >
          <Modal isModal />
        </Route> */}
        <AnimatedRoute
        exact path="/info/:id"
        component={Modal}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="animated-wrapper"
        />
        {/* : null
      } */}
      </div>
    );
  }
}

export default withRouter(App);
