




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkLoggedInUser, handleLogout } from "../services/service";
import CourseList from "../components/CourseList";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";



import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation








export default function Home() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente


  useEffect(() => {
    const verifyUser = async () => {
      try {
        const user = await checkLoggedInUser();
        setLoggedIn(true);
        setUsername(user.username);
        console.log(user.is_staff);
      } catch (error) {
        setLoggedIn(false);
        setUsername("");
      }
    };
    verifyUser();
  }, []);

  const handleLogoutClick = async () => {
    try {
      await handleLogout();
      setLoggedIn(false);
      setUsername("");
      navigate("/account");
    } catch (error) {
      console.error("Failed to logout", error.message);
    }
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogoutClick} />{" "}
      {/* Pasar props */}
      <div>
        {isLoggedIn ? (
          <>
     <h1 className="bg-gray-100 dark:bg-gray-00  text-3xl p-8 font-bold text-gray-800 tracking-wide">
     {t("userAccess.welcome.header")}, {username}!
</h1>

            <CourseList />
          </>
        ) : (
          <Link to="/account">Please log in</Link>
        )}
      </div>
      <FooterPage />
    </>
  );
}