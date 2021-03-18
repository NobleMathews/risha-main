import React, { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import { Header } from '../Components/header';
import { UserProfile } from '../Components/body';

function Professor() {
  return (
    <>
    <Header />
    <UserProfile />
    <h1>Teaching Timeline</h1>
    <Fragment>
        <div style={{width:"30vw"}}>
        <Timeline >
        <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"}>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
        </Event>
        <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
        </Event>
        </Timeline>
        </div>
    </Fragment>
    </>
  );
}

export default Professor;