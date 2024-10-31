

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";

export default function LandingPage() {
  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

  return (
    <>
      <NavBar />
      <main className="flex-1 ">
    <section className="w-full  bg-light-main dark:bg-dark-main h-screen py-12 md:py-24 lg:py-22 xl:py-30">
        <div className="container   px-3 md:px-2">
            <div className="flex flex-col space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                        {t("publicAccess.landingPage.header")}
                    </h1>
                    <p className="mx-auto py-8 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        {t("publicAccess.landingPage.description")}
                    </p>
                </div>
                <div className="space-x-4">
                    <Link to="/account">
                        <button
                            type="button"
                            className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-extra-rounded text-sm px-5 py-2.5 text-center transition-all duration-200"
                        >
                            {t("publicAccess.landingPage.continue")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
</main>


      <FooterPage />
    </>
  );
}
