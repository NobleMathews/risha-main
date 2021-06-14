import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi'
import {projectAuth} from '../firebase/config'
import PrivateRoute from '../firebase/PrivateRoute';

function NavbarN() {
    return (
        <Nav className="mr-auto">
            <NavLink activeClassName="nav-link active" className="nav-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/publications">Publications</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/lab">People</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/collaborations">Collaborations</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/slam">SlamBook</NavLink>
            {/* Shift to sirs page */}
            {/* <NavLink activeClassName="nav-link active" className="nav-link" to="/calendar">Calendar</NavLink> */}
            {/* <NavLink activeClassName="nav-link active" className="nav-link" to="/news">News</NavLink> */}
            {/* <NavLink activeClassName="nav-link active" className="nav-link" to="/gallery">Gallery</NavLink> */}
            {/* <NavLink activeClassName="nav-link active" className="nav-link" to="/open">Open Positions</NavLink> */}
            <NavLink activeClassName="nav-link active" className="nav-link" to="/join">Join Us</NavLink>
        </Nav>
    )
}

function NavbarA() {
    return (
        <>
        <Nav className="mr-auto">
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/publications">Publications</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/talks">Talks</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/news">News</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/gallery">[Gallery]</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/open">Open Positions</NavLink>
        </Nav>
        <Nav className="justify-content-end">
            <NavLink activeClassName="nav-link active" className="centered-label"  to="/admin" onClick={()=>{projectAuth.signOut()}}><FiLogOut/> LOGOUT</NavLink>
        </Nav>
        </>
    )
}

export default function NavbarL() {
    return (
        <Switch>
            <PrivateRoute path="/admin" component={NavbarA} />
            <Route path="/" component={NavbarN} />
        </Switch>
    )
}
