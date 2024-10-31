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
    const contentStyle = "flex gap-4 h-full rounded-extra-rounded shadow-lg w-full";

    switch (pageId) {
      case "Institutions":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 flex items-center bg-second-light-main dark:bg-second-dark-main shadow-md">
              <InstitutionForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-extra-rounded bg-third-light-main dark:bg-third-dark-main shadow-md">
              <InstitutionList />
            </div>
          </div>
        );
      case "Campus":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 rounded-lg bg-second-light-main dark:bg-second-dark-main shadow-md">
              <CampusForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-lg bg-third-light-main dark:bg-third-dark-main shadow-md">
              <CampusList />
            </div>
          </div>
        );
      case "Courses":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 rounded-lg bg-second-light-main dark:bg-second-dark-main shadow-md">
              <CourseForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-lg bg-third-light-main dark:bg-third-dark-main shadow-md">
              <AdminCourseList />
            </div>
          </div>
        );
      case "Enrollments":
        return (
          <div className={contentStyle}>
            <div className="w-1/2 rounded-lg bg-second-light-main dark:bg-second-dark-main shadow-md">
              <EnrollmentForm />
            </div>
            <div className="w-1/2 overflow-auto rounded-lg bg-third-light-main dark:bg-third-dark-main shadow-md">
              <EnrollmentList />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex bg-secundary-light dark:border-dark-main justify-center h-full items-center rounded-extra-rounded  font-semibold dark:bg-second-dark-main text-gray-600">
            {t("adminAccess.control.noPages")}
          </div>
        );
    }
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} className="h-16" />
      <section className="flex bg-secundary-light border dark:bg-dark-main" style={{ height: "calc(100vh - 4rem)" }}>
        <aside className="border-r bg-secundary-main dark:bg-second-dark-main p-4 w-64 shadow-lg h-full">
          <h2 className="text-lg bg-secundary-light font-semibold mb-4 text-dark-main dark:text-light-main">
            {t("adminAccess.control.header")}
          </h2>
          <AdminPagesList />
        </aside>
        <main className="flex-1 p-4 bg-primary-light dark:bg-dark-main overflow-y-auto h-full">
          {renderPageContent()}
        </main>
      </section>
    </>
  );
};

export default Control;
