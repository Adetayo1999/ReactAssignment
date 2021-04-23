import React ,{useEffect}from 'react';
import "./Footer.css";
import Navigation from './Link';
import HomeIcon from "@material-ui/icons/Home";
import EventNoteIcon from "@material-ui/icons/EventNote";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TheatersIcon from "@material-ui/icons/Theaters";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function Footer() {
  useEffect(() => {
      const Footer = document.querySelector('.footer');
      
    const Links =   Footer.querySelectorAll('a');
        Links[0].classList.add('active');
    Links.forEach(link => link.addEventListener('click' , (e) => {
        const target = e.target;
        Links.forEach(linked => linked.classList.remove('active') )
        target.parentElement.classList.add('active')
        console.log(target)
    }))


  },[])
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
