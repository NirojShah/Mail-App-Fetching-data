import React, { useState } from "react";
import axiosInstance from "../axiosInstance";

const Send = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const {data} = await axiosInstance.post(
        "/mail/send",
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      if (data.status === "success") {

        alert("success")
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };

  return (
    <div>
      <h2>Send Mail</h2>
      <form onSubmit={handleSubmit}>
        <label>
          From:
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          To:
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Body:
          <textarea name="body" value={formData.body} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Send Mail</button>
      </form>
    </div>
  );
};

export default Send;
