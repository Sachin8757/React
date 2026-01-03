import {useState} from 'react'
function Hook(){
    let[counter,setCounter]=useState(0)

    const addvalue=()=>{
        if(counter<20){
            setCounter(counter+1)
        }
    }
    const removevalue=()=>{
        if(counter>0){
            setCounter(counter-1)
        }
    }
    return(
        <>
        <h1>Hello on Hooks</h1>
        <p>Value  {counter}</p>
        <button onClick={addvalue}>Add Value {counter}</button>
        <button onClick={removevalue}>Remove Value {counter}</button>
        </>
        
    )

}
export default Hook