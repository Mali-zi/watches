import { IProps3 } from '../models/index';

export default function Clock({ time, timeZone }: IProps3) {
  let hours = time.getUTCHours() + timeZone;
  let minutes = time.getUTCMinutes();
  let seconds = time.getUTCSeconds();
  
  return (
    <div className='clock'>
      <div 
        className='hours'
        style={{
          transform: `rotateZ(${(hours % 12) * 30 + minutes * 0.5}deg)`,
        }}
      />
    
      <div className='minutes'
        style={{
          transform: `rotateZ(${minutes * 6}deg)`,
        }}
      />

      <div className='seconds'
        style={{
          transform: `rotateZ(${seconds * 6}deg)`,
        }}
      />

    </div>
  )
}

