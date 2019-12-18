import React,{Component} from 'react';
import './App.css';
import Movies from './container/movies';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MovieInfo from './component/movieInfo';
import { HashRouter } from "react-router-dom";

class App extends Component{//<Movies/>
  render(){
    return (
    <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Movies} />
          <Route exact path="/:movie_id" component={MovieInfo} />
        </div>
    </HashRouter>   
      );
  }
}
export default App;
