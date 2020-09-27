import React, { Component } from 'react';

import { connect } from 'react-redux';

//importing files
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

//creating landing component
class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

//mapping state to props
const mapStateToProps = state => ({
  loading: state.movies.loading
});

//connecting component with  redux states
export default connect(mapStateToProps)(Landing);