import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Main from './Pages/Main'
import Publications from './Pages/Publications';
import Lab from './Pages/Lab';
import Talks from './Pages/Talks';
import Press from './Pages/Press';
import GalleryAdmin from './Pages/admin/Title';
import PubAdmin from './Pages/admin/PubAdmin';
import Login from './Pages/admin/Admin';
import PrivateRoute from './firebase/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/admin/publications" component={PubAdmin} />
        <PrivateRoute path="/admin/gallery" component={GalleryAdmin} />
        <Route path="/publications" component={Publications} />
        <Route path="/lab" component={Lab} />
        <Route path="/talks" component={Talks} />
        <Route path="/news" component={Press} />
        <Route path="/gallery" component={GalleryAdmin} />
        <Route exact path="/" component={Main} />
        <Route path="/admin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
