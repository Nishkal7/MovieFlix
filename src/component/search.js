import React from 'react';

const search = (props) => {
	return(
		<div className="pa4-l">
		  <form className="bg-light-silver mw7 center pa4 br2-ns ba b--black-10">
		      <div className="cf">
		        <input className="f3 f4-l pa2 input-reset bn fl black-80 bg-white lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
		        placeholder="Movie Name" 
		        type="text" name="movie" id="movie"
		        onChange = {props.searchChange}/>
		        <button className="f5 link dim  ph4 pt2 pl5 pr5 pb3 ph3 mb2 dib white bg-black"
		        onClick = {props.searchName}>Search</button>
		      </div>
		  </form>
		</div>
	);
}

export default search;