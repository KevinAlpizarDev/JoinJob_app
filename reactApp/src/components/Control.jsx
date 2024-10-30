
import React, { useState, useEffect } from "react";
import AdminPagesList from "../pages/AdminPagesList";
import { Link, useNavigate } from "react-router-dom";
import { checkLoggedInUser, handleLogout as logout } from "../services/service";
import { useParams } from "react-router-dom";
import FooterPage from "./FooterPage";
import CampusList from "../components/CampusList";
import CampusForm from "../components/CampusForm";
import NavBar from "./main/NavBar";
import InstitutionForm from "./InstitutionForm";
import InstitutionList from "./InstitutionList";
import CourseForm from "../components/CourseForm";
import AdminCourseList from "../components/AdminCourseList";
import EnrollmentList from "../components/EnrollmentList";
import EnrollmentForm from "../components/EnrollementForm";



import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation




const Control = () => {
  const { pageId } = useParams();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente


  useEffect(() => {
    const verifyUser = async () => {
      try {
        const user = await checkLoggedInUser();
        setLoggedIn(true);
        setUsername(user.username);
      } catch (error) {
        setLoggedIn(false);
        setUsername("");
      }
    };
    verifyUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setLoggedIn(false);
      setUsername("");
      navigate("/account");
    } catch (error) {
      console.error("Failed to logout", error.message);
    }
  };

  const renderPageContent = () => {
    const contentStyle = "flex  bg-gray-500 pt-4 pb-4 pl-4 gap-4 h-full rounded-extra-rounded shadow-lg w-full";

    switch (pageId) {
      case "Institutions":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 flex items-center  bg-blue-400 shadow-md">
              <InstitutionForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-extra-rounded  bg-blue-100 shadow-md">
              <InstitutionList />
            </div>
          </div>
        );
      case "Campus":
        return (
          <div className={contentStyle}>
            {/* <div className="w-1/2 p-6 rounded-lg bg-purple-100 shadow-md">
              <CampusForm />
            </div> */}
            <div className="w-1/2 rounded-lg bg-blue-500 shadow-md">
            <CampusForm />
            </div>
            {/* <div className="w-1/2 p-6 rounded-lg bg-pink-100 shadow-md">
              <CampusList />
            </div> */}
            <div className="w-1/2 overflow-auto rounded-lg bg-blue-100 shadow-md">
            <CampusList />
            </div>
          </div>
        );
      case "Courses":
        return (
          <div className={contentStyle}>
            {/* <div className="w-1/2 p-6 rounded-lg bg-teal-100 shadow-md">
              <CourseForm />
            </div> */}
            <div className="w-1/2 rounded-lg bg-blue-100 shadow-md">
            <CourseForm />
            </div>
          
            <div className="w-1/2 overflow-auto rounded-lg bg-blue-100 shadow-md">
            <AdminCourseList />
            </div>
          </div>
        );
      case "Enrollments":
        return (
          <div className={contentStyle}>
      
            <div className="w-1/2 rounded-lg bg-blue-100 shadow-md">
            <EnrollmentForm />
            </div>
      
            <div className="w-1/2 overflow-auto rounded-lg bg-blue-100 shadow-md">
            <EnrollmentList />
            </div>
          </div>
        );
      default:
        return <div className="flex justify-center items-center h-full text-gray-600"> {t("adminAccess.control.noPages")}</div>;
    }
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <section className="flex h-screen bg-gray-100">
        <aside className="border-r bg-gray-200 p-4 h-full w-64 shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">{t("adminAccess.control.header")}</h2>
          <AdminPagesList />
        </aside>
        <main className="flex-1 bg-white p-4 mx-4 shadow-md overflow-y-auto">
          {renderPageContent()}
        </main>
      </section>
      <FooterPage />
    </>
  );
};

export default Control;
