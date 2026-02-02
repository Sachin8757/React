import { useState } from "react";

export default function CommentPage() {
  const [Comment, SetComment] = useState([]);

  const [FormData, SetFormData] = useState({
    name: "",
    remarks: "",
    rating: 3,
  });

  const formdatahandler = (e) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submithandler = (e) => {
    e.preventDefault();

    SetComment((prev) => [...prev, FormData]);

    SetFormData({
      name: "",
      remarks: "",
      rating: 3,
    });
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-cyan-200 to-emerald-200 flex gap-6 p-6">

      {/* FORM SECTION */}
      <div className="w-[40%] bg-white border-4 border-emerald-500 rounded-xl p-6 shadow-xl">
        <form onSubmit={submithandler}>
          <h2 className="text-3xl font-bold text-center mb-6 text-emerald-600">
            Give Feedback
          </h2>

          <input
            type="text"
            name="name"
            value={FormData.name}
            placeholder="Your Name"
            onChange={formdatahandler}
            className="w-full p-3 border-2 rounded-lg mb-4 focus:ring-2 focus:ring-emerald-400"
            required
          />

          <textarea
            name="remarks"
            value={FormData.remarks}
            placeholder="Your Comment"
            onChange={formdatahandler}
            className="w-full p-3 border-2 rounded-lg mb-4 focus:ring-2 focus:ring-emerald-400"
            required
          />

          {/* SLIDER RATING */}
          <div className="mb-6">
            <label className="font-semibold block mb-2">
              Rating: {FormData.rating} / 5
            </label>

            <input
              type="range"
              name="rating"
              min="1"
              max="5"
              step="1"
              value={FormData.rating}
              onChange={formdatahandler}
              className="w-full cursor-pointer accent-emerald-500"
            />

            {/* STAR PREVIEW */}
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-2xl">
                  {star <= FormData.rating ? "⭐" : "☆"}
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 text-xl font-bold rounded-lg hover:bg-emerald-600 transition shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>

      {/* COMMENT DISPLAY */}
      <div className="w-[60%] bg-white border-4 border-gray-700 rounded-xl p-6 shadow-xl overflow-y-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          All Reviews
        </h2>

        {Comment.length === 0 && (
          <p className="text-center text-gray-400">
            No reviews yet 😴
          </p>
        )}

        {Comment.map((item, index) => (
          <div
            key={index}
            className="mb-4 p-4 border-2 rounded-xl shadow hover:scale-[1.01] transition"
          >
            <p className="text-lg font-bold text-emerald-600">
              {item.name}
            </p>

            <p className="text-gray-700">{item.remarks}</p>

            <div className="mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-xl">
                  {star <= item.rating ? "⭐" : "☆"}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
