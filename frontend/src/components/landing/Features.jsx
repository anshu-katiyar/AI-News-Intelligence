import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📰",
      title: "AI Summary",
      text: "Generate short summaries in seconds.",
      section: "news",
    },
    {
      icon: "😊",
      title: "Sentiment",
      text: "Detect Positive, Neutral and Negative news.",
      section: "news",
    },
    {
      icon: "👤",
      title: "Entities",
      text: "Extract People, Organizations and Locations.",
      section: "news",
    },
    {
      icon: "📄",
      title: "PDF Analysis",
      text: "Analyze uploaded PDF files.",
      section: "pdf",
    },
    {
      icon: "🌐",
      title: "URL Analysis",
      text: "Analyze news directly from URLs.",
      section: "url",
    },
    {
      icon: "🤖",
      title: "AI Chat",
      text: "Ask questions about the news article.",
      section: "ai-chat",
    },
  ];

  const handleFeatureClick = (section) => {
    navigate(`/dashboard?section=${section}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto mt-24 grid grid-cols-3 gap-8"
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          onClick={() => handleFeatureClick(item.section)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          className="bg-slate-900 rounded-2xl p-8 cursor-pointer border border-slate-800 hover:border-cyan-500 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          <motion.h2
            whileHover={{
              rotate: 10,
              scale: 1.2,
            }}
            className="text-4xl"
          >
            {item.icon}
          </motion.h2>

          <h3 className="text-xl font-bold mt-3">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-3">
            {item.text}
          </p>

          <p className="text-cyan-400 text-sm mt-5 font-semibold">
            Click to Explore →
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Features;