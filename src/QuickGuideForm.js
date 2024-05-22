import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const QuickGuideForm = () => {
  const [formData, setFormData] = useState({
    places: "",
    numberOfPeople: "",
    language: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request sent:", formData);
    toast.success("Request sent to all guides!");
  };

  return (
    <div>
      <h2>Quick Guide Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Places to visit:</label>
          <input
            type="text"
            name="places"
            value={formData.places}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number of people:</label>
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Language you speak:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Additional information:</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Send Request</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default QuickGuideForm;
