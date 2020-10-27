import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Main from './Pages/Main'
import Publications from './Pages/Publications';
import Lab from './Pages/Lab';
import Talks from './Pages/Talks';
import Press from './Pages/Press';
import GalleryAdmin from './Pages/admin/Title';
import PubAdmin from './Pages/admin/PubAdmin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/publications" component={Publications} />
        <Route path="/lab" component={Lab} />
        <Route path="/talks" component={Talks} />
        <Route path="/news" component={Press} />
        <Route exact path="/" component={Main} />
        <Route path="/admin/publications" component={PubAdmin} />
        <Route path="/admin/gallery" component={GalleryAdmin} />
      </Switch>
    </div>
  );
}

export default App;
