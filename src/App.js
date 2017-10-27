import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { connect } from 'react-redux';
//import RootReducer from './reducers'
const store = createStore(RootReducer);


class App extends Component {
  render () {
    return (
      <PokeList />
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(App);
