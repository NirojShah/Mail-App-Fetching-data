import React, { useEffect } from "react";
import axiosInstance from "../axiosInstance";

const Sent = () => {
  const fetchSent = async () => {
    try {
      const { data } = await axiosInstance.get("/mail/sent", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      });
      if (data.status === "success") {
        alert("success");
        console.log("done");
      }
    } catch (err) {
      alert("err");
    }
  };
  useEffect(() => {
    fetchSent();
  }, []);
  return <div>Sent</div>;
};

export default Sent;
