import React from 'react';
import { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardView from '../CardView/CardView';
import ListView from '../ListView/ListView';

const Store = ({ props }) => {
    const data = props;
    const [icon, setIcon] = useState('view_list');

    function changeIcon() {
        let state;
        icon === 'view_list' ? (state = 'view_module') : (state = 'view_list');
        setIcon(state);
    }

    return (
        <>
            <header className='header'>
                <IconSwitch icon={icon} onSwitch={changeIcon} />
            </header>
            <main className='main'>
                {icon === 'view_list' ? <ListView items={data}/> : <CardView cards={data}/>}
            </main>
        </>
    );
};

export default Store;
