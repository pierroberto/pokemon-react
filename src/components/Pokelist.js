import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markAsSeen, getMovies } from '../actions';
import './poke-list.css';
import Movie from './movie';


class PokeList extends Component {

  constructor (props) { }

// ============= RENDERING


  render () {
    return (
      <h1>Pokelist</h1>
    );
  }
}

// const mapStateToProps = (state) => ({
//   movies: state.movies
// });
// const mapDispatchToProps = (dispatch) => ({
//   getMovies: (movies, cat) => dispatch(getMovies(movies, cat)),
//   markAsSeen: (id) => dispatch(markAsSeen(id))
// });

//export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
