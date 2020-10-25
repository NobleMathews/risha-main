import React,{useEffect, useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter,NavLink} from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// maybe socials in nav


import reportWebVitals from './reportWebVitals';

import {ThemeProvider,createGlobalStyle} from 'styled-components';
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props=>props.theme.mode === "dark" ? "#1D1F21" : "#F5F5F5"};
  color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"};
}
.nav-link,.navbar-brand{
  color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"} !important;
}
.mylight {
  background-color:${props=>props.theme.mode === "dark" ? "#252525":"#eeeeee"} !important;
}
`
function getInitialTheme(){
  const savedTheme = storage.getItem('theme');
  return savedTheme==="false"?false:true;
}

function Main(){
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  useEffect(()=>{
    storage.setItem('theme',isDarkMode);
  },[isDarkMode]);
  var theme = isDarkMode?{mode:'dark'}:{mode:'light'};

  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
      <React.StrictMode>
      <BrowserRouter >
        <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/"><b>RISHA Lab</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/">Home</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/publications">Publications</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/lab">Lab</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/talks">Talks</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/press">Press</NavLink>
          </Nav>
          <Nav>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <App />
      <footer className="blog-footer">
      <p class="text-center">
          <a href="#">Back to top</a>
        </p>
        <p class="text-center">Webpage designed by <a href="#">Noble</a>.</p>
      </footer>
      </BrowserRouter>
      </React.StrictMode>
    </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main/>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
