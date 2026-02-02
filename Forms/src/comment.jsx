import { useState } from "react";
export default function(){
        let [Comment,SetComment]=useState([])
        let [FormData, SetFormData] = useState({
            name: "",
            remarks: "",
            rating: "",
        })
    
        let formdatahandler = (data) => {
            SetFormData((currData) => {
                currData[data.target.name] = data.target.value;
                return { ...currData }
            })
        }
        let submitdata = () => {

        }
    
        let submithandler = (event) => {
            console.log(Comment);
           SetComment((prev) => [...prev, FormData]);
            SetFormData({
                name: "",
                remarks: "",
                rating: "",
            })

            event.preventDefault();
        }
    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="1st w-90 h-185 border-5 border-[rgb(33,248,198)]">
                <form onSubmit={submithandler}>
                <div className="w-80 h-90 flex flex-col items-center p-4 border-2 border-[rgb(14,219,151)] rounded-[10px] shadow-[0_0_20px_5px_rgb(75,226,96)]">

                    <h3 className="text-3xl font-bold">Form Data</h3>
                    <input className="mt-2 w-60 h-11 rounded-xl p-1" type="text" name="name" value={FormData.name} placeholder="Enter Your Name" onChange={formdatahandler} required />
                    <input className="mt-2 w-60 h-11 rounded-xl p-1" type="text" name="remarks" value={FormData.remarks} placeholder="Remarks" onChange={formdatahandler} required />
                    <input className="mt-2 w-60 h-11 rounded-xl p-1" type="number" name="rating" value={FormData.rating} placeholder="ratin" onChange={formdatahandler} required />
                    <button onClick={submitdata} className="mt-5 w-20 h-10 font-bold text-xl border-2 border-[rgb(9,184,228)] rounded-lg hover:bg-[rgb(9,184,228)] hover:text-white transition shadow-[0_0_20px_5Px_rgb(75,226,96)]">
                        Submit
                    </button>
                </div>
            </form>
            </div>

                <div className="w-65 h-185 border-5 border-[rgb(23,30,28)] p-3">
                {Comment.map((item, index) => (
                    <div key={index} className="mb-3 border p-2">
                    <p>Name: {item.name}</p>
                    <p>Comment: {item.remarks}</p>
                   <p>
                        Rating:{" "}
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star}>
                            {star <= item.rating ? "⭐" : "☆"}
                            </span>
                        ))}
                        </p>

                    </div>
                ))}
                </div>

        </div>
    )
}