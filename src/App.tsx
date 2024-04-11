import React, { useState } from 'react';
import './App.css';
import Plus from './Plus';
import Minus from './Minus'
import Multiply from './Multiply';
import Divide from './Divide';
import All from './All';

function App() {
const [type, setType] = useState('plus')

  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
        <div className='menu'>
        <button onClick={() => setType('plus')}>Plus</button>
        <button onClick={() => setType('minus')}>Minus</button>
        <button onClick={() => setType('multiply')}>Multiply</button>
        <button onClick={() => setType('divide')}>Divide</button>
        <button onClick={() => setType('all')}>All</button>
        </div>
       {type == 'plus' ?
      <Plus /> : type == 'minus' ? <Minus /> : type == 'multiply' ? <Multiply /> : type == 'divide' ? <Divide /> : <All />
       }
       </div>
      </header>
    </div>
  );
}

export default App;
