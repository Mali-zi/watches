import { IProps1 } from '../models/index';

export default function InputForm({ name, setName, timeZone, setTimeZone, handleClick }: IProps1) {

  return (
    <form className='inputForm'>
      <label htmlFor='name'>Название
      <input 
        id='name'
        type='text'
        className='inputPlace'
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      </label>
      <label htmlFor='timeZone'>Временная зона
      <input 
        id='timeZone'
        type='number'
        className='inputPlace'
        defaultValue={0}
        value={timeZone} 
        onChange={(e) => setTimeZone(e.target.valueAsNumber)}
      />
      </label>

      <button 
        type='button' 
        className='ok' 
        onClick={handleClick}
      >
        Добавить
      </button>
    </form>
  )
}