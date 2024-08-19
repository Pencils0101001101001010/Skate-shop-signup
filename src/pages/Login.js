import React from "react";
// import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Login = () => {
  return (
    <div className="flex flex-col border-2 border-   rounded-xl w-[400px] p-4 m-10 mx-auto bg-gradient-to-bl from-yellow-400 to-yellow-500">
      <BackButton />
      <div>
        <h1 className="text-4xl my-4 font-semibold black items-center justify-center flex ">
          Login
        </h1>

        <div className="py-4 justify-center flex flex-col ">
          <label className="mb-1">Email : </label>
          <input
            type="text"
            placeholder="email"
            className="rounded-lg p-2 shadow-xl"
          />
        </div>
        <div className="py-4 justify-center flex flex-col ">
          <label className="mb-1">Password : </label>
          <input
            type="text"
            placeholder="password"
            className="rounded-lg p-2 shadow-xl"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="justify-end rounded-lg p-2 shadow-xl bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-400 hover:text-yellow-800 hover:bg-transparent"
          >
            Login
          </button>
        </div>
        <div className="flex items-center justify-center">
          Don't have an account?
          <Link className="text-blue-500 font-semibold " to="/signup">
            Signin...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
