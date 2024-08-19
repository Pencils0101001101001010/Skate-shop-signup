import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useSnackbar } from "notistack";

import Spinner from "../components/Spinner";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios.post("http://localhost:2007/api/user/signup", formData);
    try {
      console.log("User registered successfully:");
      enqueueSnackbar("user created successfully", { variant: "success" });
      navigate("/login");
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col border-2  rounded-xl w-[400px] p-4 m-10 mx-auto  bg-yellow-500">
        <BackButton />
        {isLoading ? <Spinner /> : ""}
        <div>
          <h1 className="text-4xl my-4 font-semibold black items-center justify-center flex ">
            Create a profile
          </h1>

          <div className="py-4 justify-center flex flex-col">
            <label htmlFor="name" className="mb-1">
              User Name :
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="py-4 justify-center flex flex-col ">
            <label className="mb-1">Email : </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="py-4 justify-center flex flex-col ">
            <label className="mb-1">Password : </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              disabled={isLoading}
              className="justify-end rounded-lg p-2 shadow-xl bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-400 hover:text-yellow-800 hover:bg-transparent"
              type="submit"
            >
              Signup
            </button>
          </div>

          <div className="flex items-center justify-center">
            Don't have an account?
            <Link className="text-blue-500 font-semibold " to="/login">
              Login...
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
