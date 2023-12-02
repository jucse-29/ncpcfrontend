import React from 'react';


const Countdown = ({ countdownData }) => {
  if (!countdownData.isItBday) {
    return (
        <div className='countdown-wrapper'> 
          <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>Days</span>
          </div>
          <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Hours</span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Minutes</span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Seconds</span>
          </div>
        </div>
    );
  }

};

export default Countdown;
