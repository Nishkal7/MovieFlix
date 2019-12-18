import React from 'react';
import './posterCard.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const posterCard = (props) => {
	const {id, name,image} = props;
	return(
	 <Link to={"/"+ id}>
	 <div 
	  style={{  
              backgroundImage: `url(${image})`, backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
        }} className ="ListItem-main-card dib br2 pa2 ma2 grow shadow-2">
	  </div></Link>
	);
}
export default posterCard;////onClick = {props.clicked}>