
import React from 'react'
import css from './ColorButton.module.css';

export default function ColorButton({setBgColor,bgcolor}) {
    const randomColor = ['red','green','blue','yellow','pink'];
    const handleClick  = (e) =>{
        setBgColor(e.target.value)
    }
    // console.log(randomColor)
  return (
    <div>
      {
        randomColor.map((color,index)=>{
            return(
                <>
                  <button
                    onClick={handleClick}
                    value={color}
                    className={`${css.btn}    ${color === bgcolor ? "btn_active" : ""}`  }
                    // className={`btn btn-${color} ${color === bgcolor ? "btn-active" : ""}`}
                    key={index}
                  />
                </>
            )
        })
      }


    </div>
  )
}
