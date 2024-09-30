import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-yellow-200 dark:bg-yellow-200">
      404 Not Found
      <Link to="/">Home from Link</Link>
    </div>
  );
};

export default NotFoundPage;
