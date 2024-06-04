import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const error404 = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 fa-4x mb-4" />
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 tounded-xl px-3 py-2 mt-4"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};

export default error404;
