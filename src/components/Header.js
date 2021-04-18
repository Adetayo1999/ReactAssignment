import React from 'react';
import "./Header.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import {makeStyles} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  small:{
    width:theme.spacing(3),
    height:theme.spacing(3),
    backgroundColor: deepOrange[500]
  }
}));
const Header = () => {
   const classes = useStyles();
    return (
        <div className ="header">
          <div className="header__left">
             <FastfoodIcon />
             <h3>ribbon</h3>
          </div>
          <div className="header__right">
             <div className="icon">
                 <Avatar className={classes.small}/>
               </div>   
               <div className="icon">
                 <NotificationsIcon />
               </div>         
          </div>
        </div>
    )
}

export default Header
