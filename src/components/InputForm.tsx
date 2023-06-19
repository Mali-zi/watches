import { Props } from '../models/index';

export default function InputForm({exercises, setExercises, newDate, setNewDate, newExercise, setNewExercise}: Props) {
  function handleClick() {
    if (newDate && newExercise) {
      let check = 0;
      let nextList = exercises.map(item => {
        if (item.date === newDate) {
          check = 1;
          return { ...item, distance: (parseFloat(item.distance) + parseFloat(newExercise)).toString()};
        } else {
          return item;
        }
      });

      if (check === 0) {
        nextList = [
          ...nextList,
          {
            id: Math.floor(Math.random() * 100) + 1,
            date: newDate, 
            distance: newExercise
          }
        ];
      };

      nextList.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
      setExercises(nextList);
      setNewDate('');
      setNewExercise('');
    };
  };

  function handleChangeNewExercise(e: React.ChangeEvent<HTMLInputElement>) {
    setNewExercise(e.target.value)
  };

  const allowChars: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if(allowChars.indexOf(event.key) === -1 && event.key !== 'Backspace' 
      && event.key !== 'Delete' && event.key !== 'End' 
      && !(event.ctrlKey && event.key === "c") && !(event.ctrlKey && event.key === "v")){
      event.preventDefault();
    };    
  };

  return (
    <form className='inputForm'>
      <label htmlFor='dateLabel'>Дата (ДД.MM.ГГ)
      <input 
        id='dateLabel'
        type='date'
        className='inputDatePlace'
        defaultValue={newDate}
        value={newDate} 
        onChange={(e) => setNewDate(e.target.value)}
      />
      </label>
      <label htmlFor='distanceLabel'>Пройдено км
      <input 
        id='distanceLabel'
        type='text'
        className='inputDistancePlace'
        value={newExercise} 
        onChange={handleChangeNewExercise}
        onKeyDown={handleKeyDown}
      />
      </label>
      <button 
        type='button' 
        className='ok' 
        onClick={handleClick}
      >
        OK
      </button>
    </form>
  )
}