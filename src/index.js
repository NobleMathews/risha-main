import React,{useEffect, useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import NavbarL from './Components/NavbarL'
import ReactDOM from 'react-dom';
import {AuthProvider} from './firebase/Auth';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ScrollToTopProps from 'react-scroll-up';
import {FaArrowAltCircleUp} from 'react-icons/fa';
// maybe socials in nav

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
.btn-outline {
  color: ${props=>props.theme.mode === "dark" ? "bisque":"#000"} !important;
}

.white-border {
  background: ${props=>props.theme.mode === "dark" ? "#1D1F21" : "#F5F5F5"} !important;
  padding: 3px;
  border-radius: 50%;
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
    <AuthProvider>
    <GlobalStyle />
      <BrowserRouter >
        <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/"><b>RISHA Lab</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavbarL/>
          <div className="mr-auto navbar-nav"></div>
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
        <ScrollToTopProps showUnder={160}>
          <spam className="centered-label"><FaArrowAltCircleUp size={32} className={"mx-1 white-border"}/></spam>
        </ScrollToTopProps> 
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main/>, rootElement);
