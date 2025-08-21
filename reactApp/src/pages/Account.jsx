import React from "react";
import SignInPage from "./SignInPage";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
const Account = () => {
  return (
    <div className="bg-primary-light  dark:bg-primary-dark">
      <NavBar />
      <SignInPage />
      <FooterPage />
    </div>
  );
};

export default Account;
