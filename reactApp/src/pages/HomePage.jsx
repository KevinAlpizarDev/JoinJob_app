import React from "react";
import LoginForm from "../components/LoginForm";
import ThemeButton from "../components/ThemeButton";
const HomePage = () => {
  return (
    <div>
      <h1 className="bg-blue-500 text-white p-4 dark:bg-black">Home Page</h1>
<ThemeButton/>
      <LoginForm />
    </div>
  );
};

export default HomePage;
