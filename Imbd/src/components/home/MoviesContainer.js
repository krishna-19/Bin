import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

//creating movie container with class
class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    
    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}
//pulling the  text here from the state.
const mapStateToProps = state => ({
  movies: state.movies.movies
});

//connecting component with  redux states
export default connect(mapStateToProps)(MoviesContainer);
