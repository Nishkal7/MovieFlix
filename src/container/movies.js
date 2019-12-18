import React,{Component} from 'react';
import Header from '../component/header';
import Searched from '../component/search';
import Poster from '../component/poster';
import Footer from '../component/footer';
//import MovieInfo from '../component/movieInfo.js';

class movies extends Component{
	constructor(){
		super()
		this.state = {
			movies: [],
			searchField: '',
		}
	}

	initialize = () => {
		this.setState(
			{
				movies: [],
				searchField:''
			});
	}

	onSearchChange = (event) => {
		 event.preventDefault();
		this.setState({
			searchField : event.target.value
		});
	}

	onSearchSubmit = (event) =>{
		 event.preventDefault();
		 let len = this.state.searchField.length;
		 if(len > 2){
		 fetch(`http://www.omdbapi.com/?apikey=2819a317&s=${this.state.searchField}`)
		 .then(response => response.json())
		 .then(this.displayMovies)
		 .catch(function(error) {
           console.log(error);
           });
		}
          else
           {
           	alert("Enter more Information");
           }   
	}

//	onClicked = (data) =>{
//		console.log(data);
//	}

 	displayMovies = (response) =>{
 			this.setState({
 				movies : response.Search
 			});
 	}	
	// componentDidMount (){
	// fetch('http://www.omdbapi.com/?apikey=2819a317&s=batman')
	// 	 .then(response => response.json())
	// 	 .then(mov => {this.setState({movies: mov})});	//click = {this.linked}/>
 //   }
	render(){
		return(
				<div>
					<Header init = {this.initialize} />
					<Searched searchChange = {this.onSearchChange}
					searchName = {this.onSearchSubmit}/>
					<Poster list = {this.state.movies}/>
					<Footer />
				</div>
			);
	}
}
export default movies;