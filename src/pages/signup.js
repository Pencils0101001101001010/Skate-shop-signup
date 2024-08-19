import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2007/api/user/signup", user)
      .then(() => {
        console.log(user);

        // alert("User SignUp Success");
        setUser({ ...user, name: "", password: "", email: "" });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col border-2 border-   rounded-xl w-[400px] p-4 m-10 mx-auto bg-gradient-to-bl from-yellow-400 to-yellow-500">
      <BackButton />
      <h1 className="text-4xl my-4 font-semibold black items-center justify-center flex ">
        Sign up
      </h1>
      <form
        onClick={handelSubmit}
        className="py-4 justify-center flex flex-col "
      >
        <label htmlFor="name" className="mb-1">
          Name:
        </label>
        <input
          className="rounded-lg p-2 shadow-xl"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.name}
        />

        <label htmlFor="email" className="mb-1">
          Email:
        </label>
        <input
          className="rounded-lg p-2 shadow-xl"
          type="email"
          name="email"
          placeholder="example@yahoo.com"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.email}
        />
        <label htmlFor="password" className="mb-1">
          Password:
        </label>
        <input
          className="rounded-lg p-2 shadow-xl mb-2"
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.password}
        />
        <button
          type="submit"
          className="justify-end rounded-lg p-2 shadow-xl bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-400 hover:text-yellow-800 hover:bg-transparent"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
