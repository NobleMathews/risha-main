import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Main from './Pages/Main'
import Publications from './Pages/Publications';
import Lab from './Pages/Lab';
import Talks from './Pages/Talks';
import Press from './Pages/Press';
import GalleryAdmin from './Pages/admin/Title';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/admin" component={GalleryAdmin} />
        <Route path="/publications" component={Publications} />
        <Route path="/lab" component={Lab} />
        <Route path="/talks" component={Talks} />
        <Route path="/press" component={Press} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
