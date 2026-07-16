import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Account Created Successfully ✅");

      navigate("/login");

    } catch (error) {

      toast.error("Signup Failed");

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join AI News Intelligence
        </p>

        <div className="mt-8">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white mb-4"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white mb-4"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white mb-6"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-bold"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-400 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>

  );

}

export default Signup;