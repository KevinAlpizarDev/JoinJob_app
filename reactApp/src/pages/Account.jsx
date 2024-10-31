import React from "react";
import SignInPage from "./SignInPage";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
const Account = () => {
  return (
    <div className="bg-black">
      <NavBar />
      <SignInPage />
      <FooterPage />
    </div>
  );
};

export default Account;
