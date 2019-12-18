import React,{Component} from 'react';
import './movieInfo.css';
import Footer from './footer.js';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class movieInfo extends Component{
	constructor(){
		super()
		this.state = {
			movie:{},
			mounted: true
		}
	}

	getMovieData = () =>{
		fetch(`http://www.omdbapi.com/?apikey=2819a317&i=${this.props.match.params.movie_id}`)
		 .then(response => response.json())
		 .then(this.displayMovies)
		 .catch(function(error) {
           console.log(error);
           });
	}
	displayMovies = (response) =>{
		//console.log(response);
		if(this.mounted){
 			this.setState({
 				movie : response
 			});
 	}	
 }
  componentDidMount() {
    this.mounted = true;
    this.getMovieData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getMovieData();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

	render(){
		//console.log(this.props.match.params.movie_id);
		console.log(this.state.movie.Poster);
		return(
	<div style={{  
              backgroundImage: `url(${this.state.movie.Poster})`, backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100%'
        }}> 
    <Link to="/"><nav style={{filter: 'blur(1px)'}} className="bg-light-gray br-pill dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10 shadow-1 calisto  ma1 ">
   	 <div className="dtc dn-ns w-third"></div>
  
      <a className="dtc v-mid b black link dim w-third f5 w-10-ns tc tl-ns mb2 mb0-ns" href="#" title="Home">
        Home
      </a>
  </nav></Link>
    <article className="pa1  ma5 bg-white center bm5 w5 ba b--black-10 mv4 calisto">
     	<div className="pv2 ph3">
     <h1 className="f6 ttu tracked link dim">{this.state.movie.Title} : {this.state.movie.Year}</h1>
      </div>
      <img src={this.state.movie.Poster} className="grow w-100 db" alt="No Image"/>
      <div className="pa2">
     <p className="link dim lh-title">Released : {this.state.movie.Released}</p>
     <p className="link dim lh-title">Plot : {this.state.movie.Plot}</p>
     <small className="link dim db pv1">Runtime : {this.state.movie.Runtime}</small>
     <small className="link dim db pv1">Rating : {this.state.movie.imdbRating}</small>
      </div>
   </article>
   <Footer />
	</div>
			);
	}
}
export default movieInfo;