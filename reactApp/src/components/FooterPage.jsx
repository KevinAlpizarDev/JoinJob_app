


import { ArrowUpRight } from 'lucide-react';

export default function FooterPage() {
  return (
    <footer className="bg-yellow-100 dark:bg-gray-800 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl ">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay curious.</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Discover something new every day.</p>
          </div>
          <div className="flex ">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-100">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-100">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a> */}
           
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-base text-gray-400 dark:text-gray-500">
            &copy; 2024 Awesome Company, Inc. All rights reserved.
          </p>
        </div>
        <div className="mt-4 flex justify-center pb-4">
          <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-100">
            Join our newsletter
            <ArrowUpRight className="ml-2 -mr-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}