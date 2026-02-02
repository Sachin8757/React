import { useState } from "react"
export default function () {
    let [FormData, SetFormData] = useState({
        name: "",
        username: "",
        password: "",
    })

    let formdatahandler = (data) => {
        SetFormData((currData) => {
            currData[data.target.name] = data.target.value;
            return { ...currData }
        })
    }
    let submitdata = () => {
        console.log(FormData);
        SetFormData({
            name: "",
            username: "",
            password: "",
        })
    }

    let submithandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="w-screen h-200 flex items-center justify-center">
            <form onSubmit={submithandler}>
                <div className="w-80 h-90 flex flex-col items-center p-4 border-2 border-[rgb(14,219,151)] rounded-[10px] shadow-[0_0_20px_5px_rgb(75,226,96)]">

                    <h3 className="text-3xl font-bold">Form Data</h3>
                    <input className="mt-2 w-60 h-11 rounded-xl p-1" type="text" name="name" value={FormData.name} placeholder="Enter Your Name" onChange={formdatahandler} />
                    <input className="mt-2 w-60 h-11 rounded-xl p-1" type="text" name="username" value={FormData.username} placeholder="Enter Your UserName" onChange={formdatahandler} />
                    <input className="mt-2 w-60 h-11 rounded-xl p-1" type="password" name="password" value={FormData.password} placeholder="Password" onChange={formdatahandler} />
                    <button onClick={submitdata} className="mt-5 w-20 h-10 font-bold text-xl border-2 border-[rgb(9,184,228)] rounded-lg hover:bg-[rgb(9,184,228)] hover:text-white transition shadow-[0_0_20px_5Px_rgb(75,226,96)]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}