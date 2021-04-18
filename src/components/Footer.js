import React from 'react';
import "./Footer.css";
import Navigation from './Link';
import HomeIcon from "@material-ui/icons/Home";
import EventNoteIcon from "@material-ui/icons/EventNote";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TheatersIcon from "@material-ui/icons/Theaters";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function Footer() {
  
    return (
        <div className="footer">
            <Navigation  text="Home" Home = {HomeIcon} path="/"/>
            <Navigation  text="Activity" Home = {EventNoteIcon} path="/activity"/>
            <Navigation  text="Wallet" Home = {BusinessCenterIcon} path="/wallet"/>
            <Navigation  text="Market" Home = {TheatersIcon} path="/market"/>
            <Navigation  text="Earn" Home = {MonetizationOnIcon} path="/earn"/>
        </div>
    )
}

export default Footer
