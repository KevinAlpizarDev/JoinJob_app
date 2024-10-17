import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import CourseList from "../components/CourseList";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Crear una instancia de useNavigate

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            "http://127.0.0.1:8000/api/user/",
            config
          );
          setLoggedIn(true);
          setUsername(response.data.username);
        } else {
          setLoggedIn(false);
          setUsername("");
        }
      } catch (error) {
        setLoggedIn(false);
        setUsername("");
      }
    };
    checkLoggedInUser();
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        await axios.post(
          "http://127.0.0.1:8000/api/logout/",
          { refresh: refreshToken },
          config
        );
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setLoggedIn(false);
        setUsername("");
        console.log("Log out successful!");
        navigate("/account"); // Navegar a /account después de logout
      }
    } catch (error) {
      console.error("Failed to logout", error.response?.data || error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div>
        {isLoggedIn ? (
          <>
            <h2>Hi, {username}. Thanks for logging in!</h2>
            <button onClick={handleLogout}>Logout</button>
            <CourseList />
          </>
        ) : (
          // navigate("/account") // Navegar a /account después de logout
          <Link to="/account">
          </Link>
        )}
      </div>
      <FooterPage />
    </>
  );
}
