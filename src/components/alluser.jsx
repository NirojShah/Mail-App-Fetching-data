import React, { useEffect } from "react";
import axiosInstance from "../axiosInstance";

const Alluser = () => {
  const fetchAlluser = async () => {
    try{
        let { data } = await axiosInstance.get("/user/alluser", {
            headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
          });
          console.log(data);
    }catch(err){
        alert("err")
    }
  };
  useEffect(() => {
    fetchAlluser()
  }, []);
  return <div></div>;
};

export default Alluser;
