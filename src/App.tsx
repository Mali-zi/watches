import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
  interface IWatches {
  name: string,
  timeZone: number, 
}

function App() {
  const [name, setName] = useState<string>('');
  const [timeZone, setTimeZone] = useState<number>(0);
  const [watches, setWatches] = useState<IWatches[]>([]);

  function handleClick() {
    if (name && timeZone) {
      setWatches(
        [
          ...watches,
          {
            name: name,
            timeZone: timeZone, 
          }
        ]
      )
        }
      };

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
      </div>
    </div>
  );
}

export default App;
