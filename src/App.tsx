import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import CreateWatches from './components/CreateWatches';
import { IWatch } from './models/index';

function App() {
  const [name, setName] = useState<string>('');
  const [timeZone, setTimeZone] = useState<number>(0);
  const [watches, setWatches] = useState<IWatch[]>([]);

  function handleClick() {
    if (name && timeZone) {
      let nextList = [
          ...watches,
          {
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            timeZone: timeZone, 
          }
        ];
      setName('');
      setTimeZone(0);
      setWatches(nextList);
  }};

  return (
    <div className="App">
      <div className='container'>
      <header className="title">
        <h2>Мировое время</h2>
      </header>
      
      <InputForm 
        name={name}
        setName={setName}
        timeZone={timeZone}
        setTimeZone={setTimeZone}
        handleClick={handleClick}
      />

      <CreateWatches 
        watches={watches}
        setWatches={setWatches}
      />
      </div>
    </div>
  );
}

export default App;
