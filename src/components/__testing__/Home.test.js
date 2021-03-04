import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from '../Home';

describe('when rendering the home page', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  test('should render correctly', () => {
    act(() => {
      render(<Home />, container);
    });
    expect(container.firstChild.innerHTML).toBe('About Us');
    expect(container.getElementsByTagName('p')[0].textContent).toBe(
      'This webpage is a project developed by HeflerDev, in order to practice this marvelous tool called React. If you wish to know more, contact me through LinkedIn, Github, or through the email heflerdev@gmail.com.',
    );

    expect(container.getElementsByTagName('a')[0].href).toBe('https://heflerdev.herokuapp.com/');
    expect(container.getElementsByTagName('a')[1].href).toBe('https://reactjs.org/');
    expect(container.getElementsByTagName('a')[2].href).toBe('https://linkedin.com/in/heflerdev');
    expect(container.getElementsByTagName('a')[3].href).toBe('https://github.com/heflerdev');
    expect(container.getElementsByTagName('a')[4].href).toBe('mailto:heflerdev@gmail.com');
  });
});
