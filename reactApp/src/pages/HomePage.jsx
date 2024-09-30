import React from "react";
// import LoginForm from "../components/RegisterForm";
import RegisterForm from "../components/RegisterForm";
import ThemeButton from "../components/ThemeButton";
const HomePage = () => {
  return (
    <div className="h-screen bg-red-500 dark:bg-black">
      {/* <h1 className="h-screen bg-blue-500 text-white p-4 dark:bg-black">Home Page</h1> */}
      <ThemeButton />
      <RegisterForm />
      
    </div>
  );
};

export default HomePage;
