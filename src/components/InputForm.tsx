import { IProps1 } from '../models/index';

/** 
 * Компонент InputForm отрисовывает форму для ввода названия города и смещения 
 * в часах относительно Гринвича. По нажатию кнопки часы с соответствующими данными 
 * отображаются на экране.
 */
export default function InputForm({ name, setName, timeZone, setTimeZone, handleClick }: IProps1): React.ReactElement {

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
        min='-12'
        max='12'
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