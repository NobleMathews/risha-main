import React, { Component } from 'react'
import Ticker, { NewsTicker } from 'nice-react-ticker';
// import icon from './news-icon.png'; // add images, please make sure they can be set as src


export default class App extends Component {
  render() {
    return (
        <div className="newsticker">
          <Ticker isNewsTicker={true}>
            <NewsTicker id="1" title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20"  />
            <NewsTicker id="2" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="3" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="4" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="5" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="6" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
          </Ticker>
        </div>
    )
  }
}