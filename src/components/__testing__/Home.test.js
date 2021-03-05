import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('when rendering the home page', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('links should behave', () => {
    act(() => {
      render(<Home />, container);
    });

    expect(container.getElementsByTagName('a')[0].href).toBe('https://heflerdev.herokuapp.com/');
    expect(container.getElementsByTagName('a')[1].href).toBe('https://reactjs.org/');
    expect(container.getElementsByTagName('a')[2].href).toBe('https://linkedin.com/in/heflerdev');
    expect(container.getElementsByTagName('a')[3].href).toBe('https://github.com/heflerdev');
    expect(container.getElementsByTagName('a')[4].href).toBe('mailto:heflerdev@gmail.com');
  });

  test('should render content', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
