import { useState } from 'react'
function Hook() {
    let [counter, setCounter] = useState(0)

    const addvalue = () => {
        if (counter < 20) {
            setCounter(counter + 1)
        }
    }
    const removevalue = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <>
            <div className={"flex flex-col justify-center items-center h-screen w-full bg-gray-300"}>
                <h1 className={'text-2xl font-bold text-white-500'}>Hello on Hooks</h1>
                <p>Value  {counter}</p>
                <button className={"bg-green-500 text-center cursor-pointer w-25 h-10"} onClick={addvalue}>Add Value {counter}</button>
                <button className={"bg-green-500 text-center cursor-pointer w-25 h-10 my-5"} onClick={removevalue}>Remove Value {counter}</button>
            </div>

        </>

    )

}
export default Hook