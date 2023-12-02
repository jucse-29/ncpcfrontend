import React from 'react';
import Birthday from "../CountComponent/Birthday";
import '../CountComponent/App.css';

function Count(props) {
    return (
        <div className='count_time bg-black'>
            <div>
       <Birthday day={46} month={0}/>
       </div>
       </div>
    );
}

export default Count;