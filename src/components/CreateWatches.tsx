import ButtonDelete from './ButtonDelete';
import Clock from './Clock';
import { IProps2 } from '../models/index';

export default function CreateWatches({watches, setWatches, time}: IProps2) {


  let watchesList: JSX.Element[] = [<></>];
  if (watches) {
    watchesList = watches.map(watch => {
      return (
        <li 
          key={watch.id}
          className="mainList"
        >
          <div className='watchPlace'>
            {watch.name}
          </div>
          <div className="btns">
            <ButtonDelete handleDelete={() => {
                setWatches(
                  watches.filter(a =>
                    a.id !== watch.id
                  )
                );
              }}
            />
          </div>
          <Clock 
            time={time}
            timeZone={watch.timeZone}
          />
        </li>
      )
    });
  };

  return (
    <div className='watchesStore'>
      <ul className="mylist">
        {watchesList}
      </ul>
    </div>
  )
}