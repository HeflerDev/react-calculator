import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable react/no-unused-state */
    this.state = {
      total: '0',
      next: '',
      operation: '',
      reset: false,
    };
    /* eslint-enable react/no-unused-state */
    this.handleClick = buttonName => {
      this.setState(state => (
        calculate(state, buttonName)
      ));
    };
  }

  render() {
    return (
      <>
        <Display result={this.state} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
