import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.dispatch({
      type: 'GREET',
      payload: 'HELLO CODE-19'
    })
  }

  handleClick = () => {
    const action = {
      type: 'GREET',
      payload: 'HELLO AGAIN!! I GOT CLICKED'
    }
    this.props.dispatch(action)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.greeting}
        </p>
        <button onClick={this.handleClick}>DISPATCH SOME GREETING</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state
  }
}

export default connect(mapStateToProps, )(App);
