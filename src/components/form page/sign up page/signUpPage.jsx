import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassHidden, setIsPassHidden] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPass = (e) => {
    e.preventDefault();
    setIsPassHidden(!isPassHidden);
  };

  return (
    <div className="w-full h-screen py-6 px-6 flex flex-col justify-center items-center">
      <span className="font-bold text-2xl mb-8">Sign Up</span>
      <form className="w-4/5  my-8">
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Email:
          </label>
          <input
            value={email}
            type="email"
            id="email"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline text-lg"
            placeholder="Enter your email"
            onChange={handleEmail}
          />
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="password"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Password:
          </label>
          <input
            value={password}
            type={isPassHidden ? "password" : "text"}
            id="password"
            className="shadow-sm appearance-none border focus:border-blue-500 rounded-md w-full py-2 px-3 text-gray-700 text-lg focus:outline-none "
            placeholder="Enter your password"
            onChange={handlePass}
          />

          <button
            className="absolute right-3 bottom-3"
            onClick={handleShowPass}
          >
            {isPassHidden ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-2xl focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
      <Link to="/sign-in" className="text-lg font-semibold text-slate-500">
        Already have an account?
      </Link>
    </div>
  );
}
