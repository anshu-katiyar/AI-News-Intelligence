function Navbar() {

  return (

    <div className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      <h2 className="text-xl font-semibold">

        AI News Intelligence Dashboard

      </h2>

      <button

        className="bg-red-500 px-4 py-2 rounded-lg"

        onClick={() => {

          localStorage.removeItem("token");

          window.location.href="/";

        }}

      >

        Logout

      </button>

    </div>

  );

}

export default Navbar;