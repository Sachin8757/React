import React from 'react'
import {useState} from 'react'

function Likebutton() {
    let [islike,setislike]=useState(false);
    let cliks=()=>{
        setislike(!islike)
    }
    let bgcolor=()=>{
      console.log("red")
    }
  return (
    <div>
        <h1>Like Button Component</h1>
        <p onClick={cliks}>
            {islike?(<i className="fa-solid fa-heart text-red-500"></i>):
            (<i className="fa-regular fa-heart"></i>)}
        </p>
       

    </div>
  )
}

export default Likebutton