import { useState } from "react";

import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import AnalysisCard from "./AnalysisCard";
import KeywordList from "./KeywordList";
import EntityCard from "./EntityCard";
import toast from "react-hot-toast";

function UrlAnalysis() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);
  

 const handleAnalyze = async () => {

    if (!url.trim()) {

        toast.error("Please enter a URL");

        return;

    }

    try {

        setLoading(true);

        const response = await api.post("/analyze-url", {

            url: url

        });

        setResult(response.data);

        toast.success("URL Analyzed Successfully");

    }

    catch (error) {

        console.log(error);

        toast.error("Failed to Analyze URL");

    }

    finally {

        setLoading(false);

    }

};
  return (

    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-cyan-400">
        🌐 URL Analysis
      </h2>

      <p className="text-gray-400 mt-2">
        Paste any news URL to analyze.
      </p>

      <input
        type="text"
        placeholder="https://example.com/news"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        className="w-full mt-6 p-3 rounded-xl bg-slate-800 border border-slate-700"
      />

      <button
        onClick={handleAnalyze}
        className="mt-5 bg-cyan-500 px-6 py-3 rounded-xl"
      >
        Analyze URL
      </button>

      {loading && (
    <div className="mt-5">
        <LoadingSpinner />
    </div>
)}

{result && (

<div className="mt-8 space-y-8">

    <AnalysisCard result={result} />

    <KeywordList keywords={result.keywords} />

    <EntityCard entities={result.entities} />

</div>

)}

    </div>

  );

}

export default UrlAnalysis;