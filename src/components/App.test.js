import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render the calculator', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const display = container.querySelector('.calculator-display');
  const board = container.querySelector('.board');

  expect(display).toBeTruthy();
  expect(board).toBeTruthy();
});
