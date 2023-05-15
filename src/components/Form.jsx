import React, { useState } from 'react';

const Form = (props) => {
  const { colorBoxArray, setColorBoxArray } = props;
  
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

const mandateNumber = Number(size)
if (isNaN(mandateNumber)) {
    alert("Please enter a valid number for size.")
    return
}

    setColorBoxArray([
      ...colorBoxArray,
      {
        color: color,
        size: size + "px",
      },
    ]);
    setColor("");
    setSize("");
  };

  return (
    <div className='wrapper'>
      <form onSubmit={submitHandler} style={{ margin: "30px" }}>
        <div>
          <label className='titles'>Color</label>
          <input className='boxStyle'
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label className='titles'>Size</label>
          <input className='boxStyle'
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        <button className='btn'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
