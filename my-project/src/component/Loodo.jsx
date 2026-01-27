import React from 'react'
import {useState} from 'react'

function Loodo() {
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0})

    let icrblue=()=>{
        setMoves((prev)=>{
            return { ...prev,blue:prev.blue + 1}
        })
    };
    let icrred=()=>{
        setMoves((prev)=>{
            return { ...prev,red:prev.red + 1}
        })
    };
    let icryellow=()=>{
        setMoves((prev)=>{
            return { ...prev,yellow:prev.yellow + 1}
        })
    };
    let icrgreen=()=>{
        setMoves((prev)=>{
            return { ...prev,green:prev.green + 1}
        })
    };
  return (
    <div className=''>
        <h1 className='text-3xl'>Loodo</h1>
        <p>Blue count={moves.blue}</p>
        <button className='h-20 w-20 bg-blue-500 rounded-2xl text-2xl '  onClick={icrblue}>Blue</button>
        <p>Red count:{moves.red}</p>
        <button className='h-20 w-20 bg-red-500 rounded-2xl text-2xl '  onClick={icrred}>Red</button>
        <p>Yellow count:{moves.yellow}</p>
        <button className='h-20 w-20 bg-yellow-500 rounded-2xl text-2xl '  onClick={icryellow}>Yellow</button>
      <p>Green count:{moves.green}</p>
        <button className='h-20 w-20 bg-green-600 rounded-2xl text-2xl ' onClick={icrgreen}>Green</button>
    </div>
  )
}

export default Loodo