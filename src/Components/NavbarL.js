import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function NavbarN() {
    return (
        <Nav className="mr-auto">
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/">Home</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/publications">Publications</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/lab">Lab</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/talks">Talks</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/news">News</NavLink>
        </Nav>
    )
}

function NavbarA() {
    return (
        <Nav className="mr-auto">
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/admin/authors">Authors</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/admin/publications">Publications</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/admin/lab">Lab</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/admin/talks">Talks</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/admin/news">News</NavLink>
            <NavLink exact activeClassName="nav-link active" className="nav-link" to="/admin/gallery">[Gallery]</NavLink>
        </Nav>
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
