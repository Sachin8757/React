import {  useState } from "react";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    remarks: "",
    rating: 0,
  });
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle slider rating
  const handleRating = (e) => {
    setFormData((prev) => ({ ...prev, rating: Number(e.target.value) }));
  };

  // Submit form → POST to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
      setComments((prev) => [...prev, savedComment]);
      setFormData({ name: "", remarks: "", rating: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-200 to-cyan-200 flex gap-6 p-6">

      {/* FORM SECTION */}
      <div className="w-[40%] bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-emerald-600">Add Comment</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Your Remarks"
            className="w-full p-3 border-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <label className="font-semibold mb-1 block">Rating: {formData.rating}</label>
          <input
            type="range"
            min="0"
            max="5"
            value={formData.rating}
            onChange={handleRating}
            className="w-full mb-4"
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded text-xl hover:bg-emerald-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* COMMENTS DISPLAY */}
      <div className="w-[60%] bg-white p-6 rounded-xl shadow-xl overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">All Comments</h2>

        {comments.length === 0 && (
          <p className="text-center text-gray-400">No comments yet 😴</p>
        )}

        {comments.map((c, index) => (
          <div key={index} className="border p-4 rounded mb-3 shadow hover:scale-[1.01] transition">
            <h3 className="font-bold text-emerald-600 text-lg">{c.name}</h3>
            <p className="text-gray-700">{c.remarks}</p>
            <p className="mt-2">
              Rating: {"⭐".repeat(c.rating)}{"☆".repeat(5 - c.rating)}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
