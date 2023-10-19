import './IconSwitch.css';
import React from 'react';

export const IconSwitch = ({ icon, onSwitch }) => {
    const view = 'view_list'

    return (
        <div className='icons-wrapper' >
          <button className='material-icons' onClick={onSwitch}>{icon}</button>
        </div>
      )
};

export default IconSwitch;
