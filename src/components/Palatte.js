import { useState } from 'react';
import { send } from '../socketApi';

const Palatte = ({ activeColor }) => {
  const [color, setColor] = useState('#000000');
  return (
    <div className='palatte'>
      <input
        type='color'
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Change Background</button>
    </div>
  );
};

export default Palatte;
