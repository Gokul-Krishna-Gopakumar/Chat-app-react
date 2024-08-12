import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/navbar";

const Login = () => {
  const { logInUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div className=" bg-emerald-950 flex flex-col">
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className=" font-bold my-8 text-yellow-200 text-2xl mx-auto">
            Login
          </h1>
          <form
            className="text-white flex flex-col my-2 w-80"
            onSubmit={logInUser}
          >
            <label className="flex flex-col">
              Email address
              <input
                className="text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
                type="email"
                required
                value={loginInfo.email}
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
            </label>
            <label className="flex flex-col">
              Password
              <input
                className="text-black bg-yellow-200 border-solid border-2 border-slate-900 rounded-lg my-2 px-2"
                type="password"
                required
                value={loginInfo.password}
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
            </label>

            <div className="my-2 flex flex-col justify-center items-center">
              <button
                type="submit"
                className="transition duration-300 ease-in-out text-black bg-yellow-200 rounded-lg px-2 py-1 hover:bg-yellow-500 hover:text-white font-bold w-32"
              >
                {isLoginLoading ? "Loading.." : "Sign In"}
              </button>
            </div>

            {loginError?.error && (
              <div className="bg-red-300 rounded-lg p-2 font-bold text-red-950 border-2 border-red-950 ">
                <p>{loginError.message}</p>
              </div>
            )}
          </form>
          <div className="my-4">
            <p className="text-white text-center text-sm ">
              Not registered yet?
              <a
                href="register"
                className="transition duration-300 ease-in-out text-yellow-200 mx-1 hover:text-yellow-500"
              >
                Sign up
              </a>
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
