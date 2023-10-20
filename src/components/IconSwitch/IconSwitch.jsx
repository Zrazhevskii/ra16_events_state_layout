import './IconSwitch.css';
import React from 'react';

export const IconSwitch = ({ icon, onSwitch }) => {
    const view = 'view_list'

    return (
        <div className='icons-wrapper' >
          <span className='material-icons' onClick={onSwitch}>{icon}</span>
        </div>
      )
};

export default IconSwitch;
