import React, { Component } from 'react';
import { getPopularMovies } from './api/api';
import './App.scss';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { MoviesList } from './components/MoviesList/MoviesList';
import { SearchMovie } from './components/SearchMovie/SearchMovie';

class App extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    getPopularMovies().then(movies => this.setState({ movies: movies.results }));
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <NavLink to={{pathname: "/diamond-solution/popular"}}>Popular</NavLink>
          <NavLink to={{pathname: "/diamond-solution/search"}}>Search</NavLink>
        </nav>
        <Switch>
          <Route
            path="/diamond-solution/popular"
            render={() => <MoviesList movies={this.state.movies} />}
          />
          <Route path="/diamond-solution/search" component={SearchMovie} />
          <Redirect from={'/'} to={'/diamond-solution/popular'} />
          <Route
            render={() =>
              <h1 style={{textAlign: 'center', color: 'indianred'}}>
                Error 404 page not found
              </h1>
            }
          />
        </Switch>
      </div>
    );
  }

}

export default App;
