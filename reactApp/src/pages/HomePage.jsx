import React from "react";
// import {submitLogout} from "./SignInPage"
// import LoginForm from "../components/RegisterForm";
// import RegisterForm from "../components/RegisterForm";
// import ThemeButton from "../components/ThemeButton";
const HomePage = ({submitLogout}) => {
  return (
    <div className="h-screen bg-red-500 dark:bg-black">
      <h1>Welcome!</h1>
       <h2>You're logged in!</h2>
      <form onSubmit={submitLogout}>
          <button type="submit">Log out</button>
       </form>
      {/* <h1 className="h-screen bg-blue-500 text-white p-4 dark:bg-black">Home Page</h1> */}
      {/* <ThemeButton /> */}
      {/* <RegisterForm /> */}
      {/* // <div>
      //   <h2>You're logged in!</h2>
      //   <form onSubmit={submitLogout}>
      //     <button type="submit">Log out</button>
      //   </form>
      // </div> */}
    </div>
  );
};

export default HomePage;
