import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        🤖 AI News
      </h1>

      <div className="space-x-4">

        <Link
          to="/login"
          className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500"
        >
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;