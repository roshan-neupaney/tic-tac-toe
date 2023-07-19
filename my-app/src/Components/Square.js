import React, { useState } from 'react'

export default function Square({value, onSquareClick,className}) {
    const [clicked, setClicked] = useState(false)
    console.log('value:',value)
  return (
    <>
    <div  >
        
        <button className='button' 
        style={{height:'100px', width:'100px',backgroundColor:''}}
        onClick={()=>{onSquareClick();setClicked(true)}}
        >
            <div className={clicked? className : undefined} style={{color: value==='X'? 'yellow': 'white',fontSize:'50px'}} >{value}</div>
            
        </button>
    </div>
    </>
  )
}
