styles
   <div className="flex">



  <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <InstitutionForm />
  </div>
  <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <InstitutionList />
  </div>
   </div>

     <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <section className="flex h-screen">
        <div className=" border-r border-gray-200 p-4 h-full">
          <h2 className="text-lg font-semibold mb-4">Administración</h2>
          <AdminPagesList />
        </div>
        <div className="absolute m-8 top-[10vh] left-[50%] transform -translate-x-1/2 w-[80vw] h-[70vh] bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
          {renderPageContent()}
        </div>
      </section>