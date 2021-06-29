import React,{useEffect, useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import NavbarL from './Components/NavbarL'
import ReactDOM from 'react-dom';
import {AuthProvider} from './firebase/Auth';
import './index.css';
import './reflec.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import logo_light from "./assets/logo_light.png";
import logo_dark from "./assets/logo_dark.png";
import useDarkMode from 'use-dark-mode';

import ScrollToTopProps from 'react-scroll-up';
import {FaArrowAltCircleUp} from 'react-icons/fa';
// maybe socials in nav
import styled,{ThemeProvider,createGlobalStyle} from 'styled-components';
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
body,footer{
  background-color: ${props=>props.theme.mode === "dark" ? "#1D1F21" : "#F5F5F5"} !important;
  color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"} !important;
}
table {
  border-color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"} !important;
}
th,
td {
  border-color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"} !important;
}
.cloud-container{
	background: linear-gradient(to bottom, ${props=>props.theme.mode === "dark" ? "#007ced":"#007ced"} 1%, ${props=>props.theme.mode === "dark" ? "#1D1F21":"#F5F5F5"} 100%) !important;
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
hr {
  border-top-color: ${props=>props.theme.mode === "dark" ? "bisque":"default"} !important;;
}
.MuiIconButton-root,.MuiInput-input{
  color: ${props=>props.theme.mode === "dark" ? "#F5F5F5":"#1D1F21"} !important;
}

.white-border {
  background: ${props=>props.theme.mode === "dark" ? "#1D1F21" : "#F5F5F5"} !important;
  padding: 3px;
  border-radius: 50%;
}

// .controlledLogo{
//   content:url(${props=>props.theme.mode === "dark"? logo_dark:logo_light});
// }

:root {

  --header-height: 300px;
  @media screen and (max-width: 500px) {
    --header-height: 200px;
  }
  
  --width: 980px;
  --min-width: 320px;
  --post-width: 650px;
  --nav-height: 54px;
  --footer-height: 60px;

  --grid-gap-sm: 10px;
  --grid-gap-lg: 24px;
  --grid-gap-xl: 36px;

  --padding-sm: 16px;
  --padding-lg: 22px;

  --border-radius-sm: 6px;
  --border-radius-base: 8px;
  --border-radius-lg: 28px;

  --sizing-xs: 4px;
  --sizing-sm: 8px;
  --sizing-base: 16px;
  --sizing-md: 24px;
  --sizing-lg: 40px;
  --sizing-xl: 64px;

  --text-xs: 0.625rem;
  --text-sm: 0.75rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-title: 1.25rem;
  --text-lg: 1.5rem; 
  --text-xl: 3rem;

  --device-xs-max-width: 419px;
  --device-sm-max-width: 767px;
  --device-md-max-width: 1023px;
  --device-lg-max-width: 1441px;

  --device-xs-max-width-query: (max-width: 419px);
  --device-sm-max-width-query: (max-width: 767px);
  --device-md-max-width-query: (max-width: 1023px);
  --device-lg-max-width-query: (max-width: 1441px);

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;

  --color-outline: rgba(0,125,250,0.6);

  ${props=>props.theme.mode === "dark" && 
  `
  body {
    --color-highlight:#000;
    --color-text: #e6e6e6;
    --color-text-2: #d1d1d1;
    --color-text-3: #8c8c8c;
    --color-white: #e6e6e6;
    --color-nav-bar: rgba(29, 29, 29, 0.7);
    --color-nav-border: rgba(255, 255, 255, 0.2);
    --color-category-button: #484848;
    --color-category-button2: #9d0b0b;
    --color-background: #1c1c1c;
    --color-post-background: #1c1c1c;
    --color-card: #2c2c2c;
    --color-code: #3a3a3a;
    --color-code-block: #242424;
    --color-code-highlight: rgba(255, 255, 255, 0.05);
    --color-code-highlight-border: rgba(255, 255, 255, 0.2);
    --color-gray-1: #1c1c1c;
    --color-gray-2: #2c2c2c;
    --color-gray-3: #3a3a3a;
    --color-gray-4: #484848;
    --color-gray-5: #646464;
    --color-gray-6: #868686;
    --color-divider: rgba(255, 255, 255, 0.15);
    --color-dimmed: rgba(0, 0, 0, 0.15);
    --color-floating-button: rgba(50, 50, 50, 0.7);
    --color-floating-button-hover: rgba(255, 255, 255, 0.7);
    --color-floating-button-border: rgba(255, 255, 255, 0.2);
    --color-floating-button-border-hover: rgba(230, 230, 230, 0.7);
    --color-floating-button-text: #d1d1d1;
    --color-floating-button-text-hover: #202020;
    --color-floating-button-shadow: rgba(0, 0, 0, 0.4);
    --color-floating-button-shadow-hover: rgba(0, 0, 0, 0.4);
    --color-blue: #0a84ff;
    --color-icon: #d1d1d1;
    --dark-obj: block;
    --light-obj: none;
    /* --font-weight-bold: 600; */
  }
  `}
  ${props=>props.theme.mode != "dark" && 
  `
  body {
    --color-highlight:#ddd;
    --color-text: #1d1d1d;
    --color-text-2: #1d1d1d;
    --color-text-3: #696969;
    --color-white: #ffffff;
    --color-nav-bar: rgba(255, 255, 255, 0.7);
    --color-nav-border: rgba(200, 200, 200, 0.7);
    --color-category-button: #fff;
    --color-category-button2: #fdffbc;
    --color-background: #f2f2f2;
    --color-post-background: #ffffff;
    --color-card: #ffffff;
    --color-code: #f2f2f2;
    --color-code-block: #fafafa;
    --color-code-highlight: rgba(0, 0, 0, 0.05);
    --color-code-highlight-border: rgba(0, 0, 0, 0.2);
    --color-gray-1: #f2f2f2;
    --color-gray-2: #e0e0e0;
    --color-gray-3: #d1d1d1;
    --color-gray-4: #868686;
    --color-gray-5: #6e6e6e;
    --color-gray-6: #696969;
    --color-divider: rgba(0, 0, 0, 0.15);
    --color-dimmed: rgba(0, 0, 0, 0.15);
    --color-floating-button: rgba(255, 255, 255, 0.7);
    --color-floating-button-hover: rgba(50, 50, 50, 0.7);
    --color-floating-button-border: rgba(230, 230, 230, 0.7);
    --color-floating-button-border-hover: rgba(255, 255, 255, 0.2);
    --color-floating-button-text: #202020;
    --color-floating-button-text-hover: #f2f2f2;
    --color-floating-button-shadow: rgba(0, 0, 0, 0.2);
    --color-floating-button-shadow-hover: rgba(0, 0, 0, 0.4);
    --color-blue: #0066cc;
    --color-icon: #2c2c2c;
    --dark-obj: none;
    --light-obj: block;
  }
  `}
}

*:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 4px solid var(--color-outline);
  outline-offset: 1px;
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: no-wrap;
}
`
function getInitialTheme(){
  const savedTheme = storage.getItem('theme');
  return savedTheme==="false"?false:true;
}

function Main(){
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [expanded, setExpanded] = useState(false);

  const closeN = () =>{
    setTimeout(() => {setExpanded(expanded ? false : "expanded")}, 150)
  }

  useEffect(()=>{
    storage.setItem('theme',isDarkMode);
  },[isDarkMode]);
  // var darkMode = useDarkMode(isDarkMode, {classNameDark:"dark",classNameLight:"light"});
  var theme = isDarkMode?{device: {
    xs: '419px',
    sm: '767px',
    md: '1023px',
    lg: '1441px',
  },mode:'dark'}:{device: {
    xs: '419px',
    sm: '767px',
    md: '1023px',
    lg: '1441px',
  },mode:'light'};

  return(
    <ThemeProvider theme={theme}>
    <AuthProvider>
    <GlobalStyle />
      <BrowserRouter >
        <Navbar expanded={expanded} variant={isDarkMode?"dark":"light"} style={{ backgroundColor:  isDarkMode? "#1D1F21" : "#F5F5F5"}} sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="/logo" className="d-flex flex-row justify-content-center align-items-center">
        <div className="logo-image" style={{display:"inline-block", marginRight:"15px"}}>
          {isDarkMode?
            <img alt="RISHA" src={logo_dark} style={{height:"100%"}}/>:
            <img alt="RISHA" src={logo_light} style={{height:"100%"}}/>
          }
        </div>
        {/* <b style={{display:"inline-block"}}>RISHA Lab</b> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => closeN()}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavbarL closeN={closeN}/>
          <div className="mr-auto navbar-nav"></div>
          {/* darkMode.toggle(e) */}
          <Nav style={{padding:"10px"}}>
            <DarkModeToggle
              onChange={e => { setIsDarkMode(e);closeN()}}
              checked={isDarkMode}
              size={60}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <App />
        <ScrollToTopProps showUnder={160}>
          <span className="centered-label"><FaArrowAltCircleUp size={32} className={"mx-1 white-border"}/></span>
        </ScrollToTopProps> 
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main/>, rootElement);