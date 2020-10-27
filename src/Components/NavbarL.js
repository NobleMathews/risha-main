import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi'
import {projectAuth} from '../firebase/config'

function NavbarN() {
    return (
        <Nav className="mr-auto">
            <NavLink activeClassName="nav-link active" className="nav-link" to="/">Home</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/publications">Publications</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/lab">Lab</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/talks">Talks</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/news">News</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/gallery">[Gallery]</NavLink>
        </Nav>
    )
}

function NavbarA() {
    return (
        <>
        <Nav className="mr-auto">
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/authors">Authors</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/publications">Publications</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/lab">Lab</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/talks">Talks</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/news">News</NavLink>
            <NavLink activeClassName="nav-link active" className="nav-link" to="/admin/gallery">[Gallery]</NavLink>
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
            <Route path="/admin" component={NavbarA} />
            <Route path="/" component={NavbarN} />
        </Switch>
    )
}
