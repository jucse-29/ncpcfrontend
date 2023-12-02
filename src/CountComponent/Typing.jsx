import React from 'react';
import '../CountComponent/App.css';
const Typing = () => {
  return (
    <div className='typing'
      strings={['Think | Strategize | Code','Registration Going on!!', 'Register Fast!!']}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
};

export default Typing;