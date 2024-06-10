import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Send from "./components/send";
import Home from "./components/home";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Inbox from "./components/inbox";
import Sent from "./components/Sent";
import Drafts from "./components/Drafts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox" element={<Send />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/draft" element={<Drafts/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
