import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <>
    { calculate({ total: 40, next: 50, operation: '+/-' }, '+/-') }
    <Display />
    <ButtonPanel />
  </>
);

export default App;
