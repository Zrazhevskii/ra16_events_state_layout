import React from 'react';
import { useState } from 'react';

const Store = ({props}) => {
    const [count, setCount] = useState(0)

    const data = props;
    // console.log(data);
    return <div>Store</div>;
};

export default Store;
