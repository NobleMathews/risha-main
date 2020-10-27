import React,{useEffect, useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import NavbarL from './Components/NavbarL'
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
body,footer{
  background-color: ${props=>props.theme.mode === "dark" ? "#1D1F21" : "#F5F5F5"} !important;
  color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"} !important;
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
          <NavbarL/>
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
