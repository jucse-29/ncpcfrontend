import React from 'react';
import Typed from 'react-typed';
import '../CountComponent/App.css';
const Typing = () => {
  return (
    <Typed className='typing'
      strings={['Registration Going on!!', 'Register Fast!!','Think | Strategize | Code']}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
};

export default Typing;