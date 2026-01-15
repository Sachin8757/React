import React, { useState } from 'react'

function Botton({
    title,bgcolor
    }) {
        const changetitle=()=>{
            const [newtitle,settitle]=useState(title)
        }
        
  return (
    <div>
        <h1>button componenet</h1>
        <button style={{ backgroundColor: bgcolor }}>{newtitle}</button>
    </div>
  )
}

export default Botton