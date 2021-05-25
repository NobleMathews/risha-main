import React from "react";
import ResponsiveEmbed from "react-responsive-embed";
import Footer from "../Components/Footer";

const Calendar = () => {
  return (
    <>
    <ResponsiveEmbed src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=cmlzaGFsYWJAaWl0dHAuYWMuaW4&amp;color=%23039BE5&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;title=Risha%20Activities"/>
    <Footer/>
    </>
  );
}

export default Calendar;