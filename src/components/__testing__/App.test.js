import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import App from '../App';

const clickOn = el => {
  act(() => {
    el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

describe('when rendering the page', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('when displaying the calculator', () => {
  const btnsObj = {};
  let display;
  let board;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
    });

    display = container.querySelector('.calculator-display');
    board = container.querySelector('.board');

    expect(display).toBeTruthy();
    expect(board).toBeTruthy();

    const buttons = container.querySelectorAll('.calculator-button');
    buttons.forEach(item => {
      btnsObj[item.innerHTML] = document.getElementById(`btn-${item.innerHTML}`);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('all number buttons should work', () => {
    clickOn(btnsObj['1']);
    clickOn(btnsObj['2']);
    clickOn(btnsObj['3']);
    clickOn(btnsObj['4']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['6']);
    clickOn(btnsObj['7']);
    clickOn(btnsObj['8']);
    clickOn(btnsObj['9']);
    clickOn(btnsObj['0']);
    expect(display.firstChild.innerHTML).toBe('1234567890');
  });

  test('should not stack zeroes', () => {
    clickOn(btnsObj['0']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['0']);
    expect(display.firstChild.innerHTML).toBe('0');
  });

  test('should operate plus', () => {
    clickOn(btnsObj['1']);
    clickOn(btnsObj['+']);
    clickOn(btnsObj['2']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('3');
  });

  test('should operate minus', () => {
    clickOn(btnsObj['8']);
    clickOn(btnsObj['-']);
    clickOn(btnsObj['7']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('1');
  });

  test('should operate times', () => {
    clickOn(btnsObj['3']);
    clickOn(btnsObj.X);
    clickOn(btnsObj['4']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('12');
  });

  test('should operate div', () => {
    clickOn(btnsObj['1']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['/']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('2');
  });

  test('should reset and keep working', () => {
    clickOn(btnsObj['1']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['/']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['=']);
    clickOn(btnsObj.Ac);
    expect(display.firstChild.innerHTML).toBe('0');
    clickOn(btnsObj['5']);
    expect(display.firstChild.innerHTML).toBe('5');
  });

  test('should inverse operation', () => {
    clickOn(btnsObj['1']);
    clickOn(btnsObj['2']);
    clickOn(btnsObj['3']);
    clickOn(btnsObj['+/-']);
    expect(display.firstChild.innerHTML).toBe('-123');
  });

  test('should work with decimals', () => {
    clickOn(btnsObj['.']);
    clickOn(btnsObj['3']);
    clickOn(btnsObj['3']);
    expect(display.firstChild.innerHTML).toBe('0.33');
    clickOn(btnsObj['+']);
    clickOn(btnsObj['3']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('3.33');
  });

  test('should get %', () => {
    clickOn(btnsObj['3']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['%']);
    expect(display.firstChild.innerHTML).toBe('0.35');
  });

  test('string size should be less than 11', () => {
    for (let i = 0; i < 20; i += 1) {
      clickOn(btnsObj['5']);
    }
    expect(display.firstChild.innerHTML.length).toBeLessThanOrEqual(10);
  });

  test('should perform multiple operations', () => {
    clickOn(btnsObj['3']);
    clickOn(btnsObj['+']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('8');
    clickOn(btnsObj['7']);
    clickOn(btnsObj.X);
    clickOn(btnsObj['7']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('49');
    clickOn(btnsObj['3']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['-']);
    clickOn(btnsObj['1']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['0']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('1550');
    clickOn(btnsObj['+/-']);
    expect(display.firstChild.innerHTML).toBe('-1550');
    clickOn(btnsObj['+/-']);
    expect(display.firstChild.innerHTML).toBe('1550');
    clickOn(btnsObj['%']);
    expect(display.firstChild.innerHTML).toBe('15.50');
    clickOn(btnsObj.Ac);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['+']);
    clickOn(btnsObj['5']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('10');
    clickOn(btnsObj['+']);
    clickOn(btnsObj['8']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('18');
  });

  test('should stack operations', () => {
    clickOn(btnsObj['8']);
    clickOn(btnsObj['+']);
    clickOn(btnsObj['8']);
    clickOn(btnsObj['+']);
    expect(display.firstChild.innerHTML).toBe('16');
    clickOn(btnsObj['8']);
    clickOn(btnsObj['=']);
    expect(display.firstChild.innerHTML).toBe('24');
  });
});
