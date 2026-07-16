import { useState } from "react";
import api from "../services/api";

function ChatBox({ news }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      const response = await api.post("/chat", {
        news,
        question,
      });

      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
      alert("Failed to get AI answer.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>💬 Ask AI About This News</h2>

      <textarea
        rows="3"
        cols="100"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything..."
      />

      <br />
      <br />

      <button onClick={askQuestion}>Ask AI</button>

      <br />
      <br />

      {answer && (
        <>
          <h3>🤖 AI Answer</h3>
          <p>{answer}</p>
        </>
      )}
    </div>
  );
}

export default ChatBox;