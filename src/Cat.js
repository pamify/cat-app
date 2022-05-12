import React from 'react';

const Cat = ({ image, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Randomize</button>
      <img height={'50%'} width={'50%'} src={image} alt="" />
    </div>
  
  )
}
export default Cat;
