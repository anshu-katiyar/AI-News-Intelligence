import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        🤖 AI News
      </h1>

      <div>

        <Link
          to="/dashboard"
          className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
        >
          🚀 Launch Dashboard
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;