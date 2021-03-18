import React, { Component } from 'react'
import NewsTicker,{Directions} from 'react-advanced-news-ticker'
// import Ticker, { NewsTicker } from 'nice-react-ticker';
// import icon from './news-icon.png'; // add images, please make sure they can be set as src


export default class App extends Component {
  render() {
    return (
        // <div className="newsticker">
        //   <Ticker isNewsTicker={true}>
        //     <NewsTicker id="1" title="Risha Lab develops novel AI powered augmented virtual reality" url=" https://iittp.ac.in/" meta="11:10:20"  />
        //     <NewsTicker id="2" title="Risha Lab in the news" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="3" title="How polarised light can help develop multi point projectors" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="4" title="Ground breaking research by Risha Lab" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="5" title="Upcoming tech explorer this month" url=" https://iittp.ac.in/" meta="11:10:20" />
        //     <NewsTicker id="6" title="Local news coverage of tool" url=" https://iittp.ac.in/" meta="11:10:20" />
        //   </Ticker>
        // </div>
        <>
        <NewsTicker
        rowHeight = {48}
        maxRows = {2}
        speed = {600}
        direction = {Directions.UP}
        duration = {4000}
        autoStart = {true}
        pauseOnHover = {true}
        id = "risha_news"
        className = "rishaFeed"
        // style = {{marginTop: 15}}
        >
          <div>Etiam imperdiet volutpat libero eu tristique.</div>
          <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
          <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
          <div>Nunc ultrices tortor eu massa placerat posuere.</div>
        </NewsTicker>
        </>
    )
  }
}