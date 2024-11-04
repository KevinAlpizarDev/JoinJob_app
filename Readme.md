Last


    <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              {/* <img
                className="h-10 w-10 rounded-standard"
                src={Logo}
                alt="Logo"
              /> */}
              <span className="text-2xl font-bold text-blue-sky-light dark:text-blue-sky">
                JoinJob
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <NavLink to="/about">{t("publicAccess.navbar.aboutUs")}</NavLink>
              <NavLink to="/contact">{t("publicAccess.navbar.contactUs")}</NavLink>
            </div>
          </div>