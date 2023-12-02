import React from 'react';
import Typed from 'react-typed';
import '../CountComponent/App.css';
const Typing = () => {
  return (
    <Typed className='typing'
      strings={['Think | Strategize | Code','Registration Going on!!', 'Register Fast!!']}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
};

export default Typing;