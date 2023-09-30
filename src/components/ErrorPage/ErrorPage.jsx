import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.error(error);
  return (
    <section className="flex items-center h-screen text-center">
      <div className=" flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className=" max-w-md ">
        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
          <span className="sr-only">Error</span> {status || 404}
        </h2>
        <p className="text-3xl font-bold">
            {error?.message}
        </p>
        <Link to='/'>
          <button className="bg-cyan-200 py-3 px-12 font-semibold mt-5 rounded-md">
            Back to homePage
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default ErrorPage;
