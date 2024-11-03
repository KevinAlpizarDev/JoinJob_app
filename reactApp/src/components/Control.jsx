import React, { useState, useEffect } from "react";
import AdminPagesList from "../pages/AdminPagesList";
import { useNavigate, useParams } from "react-router-dom";
import { checkLoggedInUser, handleLogout as logout } from "../services/service";
import FooterPage from "./FooterPage";
import NavBar from "./main/NavBar";
import InstitutionForm from "./InstitutionForm";
import InstitutionList from "./InstitutionList";
import CampusList from "../components/CampusList";
import CampusForm from "../components/CampusForm";
import CourseForm from "../components/CourseForm";
import AdminCourseList from "../components/AdminCourseList";
import EnrollmentList from "../components/EnrollmentList";
import EnrollmentForm from "../components/EnrollementForm";
import { useTranslation } from "react-i18next";
const Control = () => {
  const { pageId } = useParams();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation("global");

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
    const contentStyle = "flex  gap-4 h-full  rounded-extra-rounded  w-full";

    switch (pageId) {
      case "Institutions":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 flex items-center  dark:bg-second-dark-main ">
              <InstitutionForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-extra-rounded bg-third-light-main dark:bg-third-dark-main ">
              <InstitutionList />
            </div>
          </div>
        );
      case "Campus":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 rounded-lg bg-second-light-main dark:bg-second-dark-main ">
              <CampusForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-lg bg-third-light-main dark:bg-third-dark-main ">
              <CampusList />
            </div>
          </div>
        );
      case "Courses":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 rounded-lg bg-second-light-main dark:bg-second-dark-main ">
              <CourseForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-lg bg-third-light-main dark:bg-third-dark-main ">
              <AdminCourseList />
            </div>
          </div>
        );
      case "Enrollments":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 rounded-lg bg-second-light-main dark:bg-second-dark-main">
              <EnrollmentForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-lg bg-third-light-main dark:bg-third-dark-main">
              <EnrollmentList />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex border dark:bg-secundary-dark  bg-secundary-light  justify-center h-full items-center rounded-extra-rounded  font-semibold dark:bg-second-dark text-gray-600 dark:text-tertiary-light">
            {t("adminAccess.control.noPages")}
          </div>
        );
    }
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} className="h-16" />
      <section className="flex bg-blue-300 dark:bg-dark-main" style={{ height: "calc(100vh - 4rem)" }}>
        <aside className=" dark:bg-secundary-dark bg-secundary-light dark:bg-second-dark-main p-4 w-64 shadow-lg h-full">
          <h2 className="text-primary-dark dark:text-primary-light   font-semibold mb-4 ">
            {t("adminAccess.control.header")}
          </h2>
          <AdminPagesList />
        </aside>
        <main className="flex-1 p-4  bg-primary-light dark:bg-primary-dark overflow-y-auto h-full">
          {renderPageContent()}
        </main>
      </section>
    </>
  );
};

export default Control;
