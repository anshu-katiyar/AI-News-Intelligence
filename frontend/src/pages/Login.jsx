import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
  "token",
  response.data.access_token
);

toast.success("Login Successful ✅");

navigate("/dashboard");

    } catch (error) {

      toast.error("Invalid Email or Password");

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-cyan-400">

          🤖 AI News

        </h1>

        <p className="text-center text-gray-400 mt-2">

          Intelligent News Summarization Platform

        </p>

        <div className="mt-8">

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <br/><br/>

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <br/><br/>

          <button

            onClick={handleLogin}

            className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-xl font-bold"

          >

            Login

          </button>

          <p className="text-center mt-5 text-gray-400">

Don't have an account?

<Link
  to="/signup"
  className="text-cyan-400 hover:underline"
>
  Sign Up
</Link>
</p>

        </div>

      </div>

    </div>

  );

}

export default Login;