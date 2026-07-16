import { useState } from "react";
import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import AnalysisCard from "./AnalysisCard";
import KeywordList from "./KeywordList";
import EntityCard from "./EntityCard";
import ChatBox from "./ChatBox";
import toast from "react-hot-toast";



function NewsInput() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);



  const handleSubmit = async () => {
    if (!news.trim()) {
      toast.error("Please enter a news article.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/analyze", {
        news: news,
      });

      setResult(response.data);

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.detail);
      } else {
        toast.error("Backend Connection Failed");
      }

    } finally {
      setLoading(false);
    }
  };


  const downloadPDF = async () => {

    try {

        const response = await api.post(

            "/download-report",

            result,

            {

                responseType: "blob"

            }

        );

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute(
            "download",
            "AI_News_Report.pdf"
        );

        document.body.appendChild(link);

        link.click();

        link.remove();

    }

    catch(error){

        console.log(error);

        toast.error("PDF Download Failed");

    }

};




  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="bg-slate-900 rounded-2xl shadow-xl p-8">

      

<h2 className="text-3xl font-bold text-cyan-400">

📰 Analyze News

</h2>

<p className="text-gray-400 mt-2">

Paste any news article and let AI summarize and analyze it.

</p>

<textarea

rows="12"

placeholder="Paste your news article here..."

className="w-full mt-6 bg-slate-800 rounded-xl border border-slate-700 p-5 text-white outline-none focus:border-cyan-400"

value={news}

onChange={(e)=>setNews(e.target.value)}

/>


<button

onClick={handleSubmit}

disabled={loading}

className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-bold"

>

🚀 Analyze News

</button>

</div>


{loading &&

<div className="mt-5">

<LoadingSpinner/>

</div>

}
      <br /><br />


      {result && (

       <div className="bg-slate-900 rounded-2xl shadow-xl mt-10 p-8 space-y-8">


          <AnalysisCard result={result} />


          <KeywordList keywords={result.keywords} />
          <hr />

          

          <EntityCard entities={result.entities} />

          <hr />

          <div className="grid grid-cols-2 gap-6">

<div className="bg-slate-800 rounded-xl p-5">

<h3 className="text-cyan-400">

Word Count

</h3>

<p className="text-3xl font-bold">

{result.word_count}

</p>

</div>

<div className="bg-slate-800 rounded-xl p-5">

<h3 className="text-cyan-400">

Character Count

</h3>

<p className="text-3xl font-bold">

{result.character_count}

</p>

</div>

</div>
          <hr />

{/* <h2>🤖 AI Answer</h2>

<p>{answer}</p> */}

<div className="mt-8">

<ChatBox news={news} />
<button
    onClick={downloadPDF}
    className="bg-green-500 hover:bg-green-600 mt-6 px-8 py-3 rounded-xl font-bold"
>
    📥 Download PDF Report
</button>

</div>

{/* <div className="space-y-8">

<AnalysisCard />

<KeywordList />

<EntityCard />

Word Count

ChatBox

</div> */}

        </div>

      )}

    </div>
  );
}

export default NewsInput;