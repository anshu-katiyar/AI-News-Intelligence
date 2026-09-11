import { useEffect, useState } from "react";
import api from "../../services/api";
import { motion } from "framer-motion";

function LiveNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await api.get("/live-news");

      setNews(response.data.news || []);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Live News Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    const interval = setInterval(() => {
      fetchNews();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">

      <div className="flex items-center justify-between mb-6">

        <div>
          <div className="flex items-center gap-3">

            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>

            <h2 className="text-3xl font-bold text-white">
              Live News
            </h2>

          </div>

          <p className="text-gray-400 mt-2">
            Latest headlines from India and around the world
          </p>
        </div>

        <button
          onClick={fetchNews}
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-400 text-cyan-400 transition"
        >
          🔄 Refresh
        </button>

      </div>

      {lastUpdated && (
        <p className="text-xs text-gray-500 mb-5">
          Updated: {lastUpdated.toLocaleTimeString()}
        </p>
      )}

      {loading ? (
        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-40 bg-slate-900 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : (

        <div className="grid grid-cols-3 gap-5">

          {news.slice(0, 9).map((item, index) => (

            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"

              initial={{
                opacity: 0,
                y: 20
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}

              whileHover={{
                y: -5
              }}

              className="block bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-2xl p-5 transition-all shadow-lg hover:shadow-cyan-500/20"
            >

              <div className="flex items-center gap-2 mb-3">

                <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">
                  LIVE
                </span>

                <span className="text-xs text-gray-500">
                  {item.source}
                </span>

              </div>

              <h3 className="text-white font-semibold leading-6 line-clamp-3">
                {item.title}
              </h3>

              <div className="mt-4 flex justify-between items-center">

                <span className="text-xs text-gray-500">
                  {item.published
                    ? new Date(item.published).toLocaleString()
                    : "Latest"}
                </span>

                <span className="text-cyan-400 text-sm">
                  Read →
                </span>

              </div>

            </motion.a>

          ))}

        </div>

      )}

    </section>
  );
}

export default LiveNews;