import React from "react";
// import LoginForm from "../components/RegisterForm";
import RegisterForm from "../components/RegisterForm";
const HomePage = () => {
  return (
    <div className="h-screen bg-blue-100">
      {/* <h1 className="h-screen bg-blue-500 text-white p-4 dark:bg-black">Home Page</h1>
      <ThemeButton /> */}
      <RegisterForm />
      
    </div>
  );
};

export default HomePage;
