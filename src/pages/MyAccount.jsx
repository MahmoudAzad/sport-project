import React, { useState } from "react";
import Login from "../components/Form/Login";
import Register from "../components/Form/register";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {activeTab === "login" ? (
        <Login changePage={handleTabClick} />
      ) : (
        <Register changePage={handleTabClick} />
      )}
    </div>
  );
};

export default MyAccount;
