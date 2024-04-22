import React, { useEffect } from "react";
import axiosInstance from "../axiosInstance";

const Inbox = () => {
  const fetchMails = async () => {
    const { data } = await axiosInstance.get("/mail/inbox", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    if(data.status === "success"){
        console.log(data)
        alert("done")
    }
  };
  useEffect(()=>{
    fetchMails()
  },[])
  return <div>Inbox</div>;
};

export default Inbox;
