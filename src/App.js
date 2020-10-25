import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Main from './Pages/Main'
import Publications from './Pages/Publications';
import Lab from './Pages/Lab';
import Talks from './Pages/Talks';
import Press from './Pages/Press';

function App() {
  return (
    <div className="App">
      <Switch>
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
