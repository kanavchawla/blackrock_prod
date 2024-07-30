import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/auth"

const PasswordInput = ({
  label,
  value,
  onChange,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={label}
        className=" smooth-transition text-gray-900 block mb-2 text-sm font-medium select-none"
      >
        {label}
      </label>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          name={label}
          id={label}
          className="rounded-sm smooth-transition bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={label}
          value={value}
          onChange={onChange}
          required
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-[38px] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
      </div>
    </div>
  );
};
const LoginForm = () => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  let rememberMe = isChecked;
  
  const handleRememberMe = () => {
    setIsChecked(!isChecked);
    console.log(!isChecked);
    rememberMe = !isChecked;
  };


  const handleSignIn = (e) => {
    e.preventDefault()
    console.log(rememberMe)
    dispatch(login(username, password, rememberMe, navigate))
  };

  const togglePasswordVisibility = (e) => {
    e.persist(); // Add this line
    setShowPassword(!showPassword);
  };

  return (
    // <div>      
    //   <Header/>
    
    <section
      className=" rounded-sm smooth-transition bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac] min-h-screen flex items-center justify-center"
    >
      <div
        className=" rounded-sm smooth-transition w-full items-center justify-center max-w-md p-6 bg-accent shadow-lg }"
      >
        <h1
          className=" smooth-transition text-xl font-bold text-center select-none text-gray-900 mb-10"
        >
          Log In to Your Account
        </h1>
        {/* <form className="space-y-4" onSubmit={handleSignIn}> */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className=" smooth-transition text-gray-900 block mb-2 text-sm font-medium select-none"
            >
              username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className=" rounded-sm smooth-transition bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className=" rounded-sm smooth-transition w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  checked={isChecked}
                  onChange={handleRememberMe}
                />
              </div>
              <div className="ml-3 text-sm select-none">
                <label
                  htmlFor="remember"
                  className=" smooth-transition text-gray-500"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a className="text-sm font-medium text-blue-600 hover:underline select-none">
              <Link
                to="/forgetpassword"
                className=" smooth-transition font-medium text-indigo-800 hover:underline select-none"
              >
                Forgot Password
              </Link>
            </a>
          </div>
          <button
            type="submit"
            onClick={handleSignIn}
            className="rounded-sm smooth-transition w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium text-sm mt-5 px-5 py-2.5 text-center select-none"
          >
            Sign in
          </button>
          <ToastContainer limit={2} />

        </form>
      </div>
    </section>
    // </div>
  );
};

export default LoginForm;
