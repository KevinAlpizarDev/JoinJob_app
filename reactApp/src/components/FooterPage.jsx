

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation









export default function FooterPage() {

  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente




  return (
    <footer className=" bg-footer dark:bg-gray-900 py-4 px-6 sm:px-8 lg:px-10 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          
              {t("publicAccess.footer.stayCurious")}
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("publicAccess.footer.description")}
            </p>
          </div>
          <div className="flex items-center">
            <Link
              to="https://github.com/KevinAlpizarDev/JoinJob_app"
              target="_blank"
            >
              <svg
                className="h-6 w-6 text-[#0079BF] dark:text-[#00A4E4] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
    
          </p>
        </div>

        <div className="mt-6 flex justify-center p-6">
          <a
            href="#"
            className="  inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-extra-rounded shadow-sm text-white bg-blue-500   hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
          >
            Join our newsletter
            {/* <ArrowUpRight className="ml-2 -mr-1 h-4 w-4" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}



