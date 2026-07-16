import ChatBox from "./ChatBox";

function AIChatPage() {

  return (

    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-cyan-400">
        🤖 AI Chat Assistant
      </h2>

      <p className="text-gray-400 mt-2">
        Ask questions about your analyzed news article.
      </p>

      <div className="mt-8">
        <ChatBox />
      </div>

    </div>

  );

}

export default AIChatPage;