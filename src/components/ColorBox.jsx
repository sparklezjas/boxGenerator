import React from 'react'

const ColorBox = (props) => {
    const {colorBoxArray} = props

  return (
    <div>
        {
            colorBoxArray.map((box, index) => (
                <div key={index} style={{
                    display: "inline-block",
                    margin: "15px",
                    height: box.size,
                    width: box.size,
                    backgroundColor: box.color
                    }}>
                </div>
            ))
        }
    </div>
  )
}

export default ColorBox