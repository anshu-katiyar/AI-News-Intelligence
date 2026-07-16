import Navbar from "../layout/Navbar";
import NewsInput from "../components/NewsInput";

function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto mt-10">

        <h1 className="text-5xl font-bold">
          AI News Intelligence Platform
        </h1>

        <p className="mt-5 text-gray-300">
          Analyze News using Gemini AI
        </p>

        <NewsInput />

      </div>

    </>
  );
}

export default Home;