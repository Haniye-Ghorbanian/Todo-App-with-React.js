import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="w-full h-screen py-6 px-6 flex flex-col justify-center items-center">
      <span className="font-bold text-2xl mb-8">Sign In</span>

      <form className="w-4/5  my-8">
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline text-lg"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm appearance-none border focus:border-blue-500 rounded-md w-full py-2 px-3 text-gray-700 text-lg focus:outline-none "
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-2xl focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
      <Link to="/sign-up" className="text-lg font-semibold text-slate-500">
        Don't have an account yet?
      </Link>
    </div>
  );
}
