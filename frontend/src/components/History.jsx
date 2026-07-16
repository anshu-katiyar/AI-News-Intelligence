import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function History() {

  const [history, setHistory] = useState([]);
const [search, setSearch] = useState("");
const [selectedNews, setSelectedNews] = useState(null);


  useEffect(() => {
    loadHistory();
  }, []);

const deleteHistory = async (id) => {

    try {

        const token = localStorage.getItem("token");

        await api.delete(`/history/${id}`, {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        toast.success("History Deleted");

        loadHistory();

    }

    catch(error){

        console.log(error);

        toast.error("Delete Failed");

    }

};


  const loadHistory = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await api.get("/history", {

        headers: {
          Authorization: `Bearer ${token}`
        }

      });

      setHistory(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bg-slate-900 rounded-2xl p-8">

      <h1 className="text-3xl font-bold text-cyan-400">

        📜 Analysis History
        <input
    type="text"
    placeholder="🔍 Search History..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full mt-6 p-3 rounded-xl bg-slate-800 border border-slate-700 text-white"
/>

      </h1>

      <div className="mt-8 space-y-5">

        {history.length === 0 ? (

          <p>No History Found</p>

        ) : (

          history
.filter((item) => {

    const text =
        (
            item.news +
            item.analysis.summary +
            item.analysis.category +
            item.analysis.sentiment
        ).toLowerCase();

    return text.includes(search.toLowerCase());

})
.map((item) => (

            <div
              key={item._id}
              className="bg-slate-800 rounded-xl p-5"
            >

                <div className="mt-5">

                    <button

onClick={()=>setSelectedNews(item)}

className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg mr-3"

>

👁 View

</button>

<button

onClick={()=>deleteHistory(item._id)}

className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"

>

🗑 Delete

</button>

</div>

              <h2 className="text-cyan-400 font-bold">

                {item.analysis.category}

              </h2>

              <p className="mt-3">

                {item.analysis.summary}

              </p>

              <p className="mt-3 text-green-400">

                {item.analysis.sentiment}

              </p>

            </div>

          ))

        )}

      </div>

      {selectedNews && (

<div className="fixed inset-0 bg-black/60 flex items-center justify-center">

<div className="bg-slate-900 w-3/4 rounded-2xl p-8">

<h2 className="text-3xl text-cyan-400 font-bold">

📰 Full Analysis

</h2>

<h3 className="mt-6 font-bold">

Original News

</h3>

<p className="mt-3">

{selectedNews.news}

</p>

<h3 className="mt-8 font-bold">

Summary

</h3>

<p className="mt-3">

{selectedNews.analysis.summary}

</p>

<h3 className="mt-8 font-bold">

Sentiment

</h3>

<p className="text-green-400">

{selectedNews.analysis.sentiment}

</p>

<button

onClick={()=>setSelectedNews(null)}

className="mt-8 bg-red-500 px-6 py-3 rounded-xl"

>

Close

</button>

</div>

</div>

)}

    </div>

  );

}

export default History;