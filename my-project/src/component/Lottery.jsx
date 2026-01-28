import React from 'react'
import {useState} from 'react'
import { gentTicket,sum } from './genticket';
function Lottery() {
    let [ticket,setticket]=useState(gentTicket(3));
    let iswin=sum(ticket)===15;
    let newticket=()=>{
      setticket(gentTicket(3))
    }
  return (
    <div className=' text-white'>
        <h2 className='text-5xl font-bold'>Lottery Game!</h2>
        <div className='text-3xl m-5 flex justify-center'>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <button onClick={newticket} className='font-bold w-50 h-12 bg-cyan-900 rounded-2xl ml-19'>By Ticket</button>
        {iswin ?<p className='text-2xl font-bold mt-1 ml-8'>Congratulation you Won!🥳🎉</p>:""}
    </div>
  )
}

export default Lottery