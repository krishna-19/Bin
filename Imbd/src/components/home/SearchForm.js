import React, { Component } from 'react'
import {searchMovie} from '../../actions/searchActions'
import {fetchMovies,setLoading} from '../../actions/searchActions'
import {connect}  from 'react-redux'

//creating search container with class
 class SearchContainer extends Component {
  //handlers
    onChangeHandler = (e)=>{
      this.props.searchMovie(e.target.value)
    }
  
    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }
    //search button
    render() {
        return (
                <div className="container">
                         <br/>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                         <form className="card card-sm" onSubmit={this.onSubmitHandler}>
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h5 text-body"></i>
                                    </div>
                                        <div className="col">
                                            <input className="form-control form-control-lg form-control-borderless" 
                                                type="search" 
                                                placeholder="Search for a movie,TV series..."
                                                onChange={this.onChangeHandler}/>
                                        </div>
                                           
                                        <div className="col-auto">
                                                <button className="btn btn-lg btn-success" 
                                                type="submit">Search</button>
                                        </div>
                                         
                                        </div>
                                    </form>
                                </div>
                              
                            </div>
                    </div>
                 )   
            }
        }
                //pulling the  text here from the state.
            const mapStateToProps =(state)=>({
                text:state.movies.text
        })


//connecting component with  redux states
export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading})(SearchContainer)