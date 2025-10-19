import { useState } from "react";
import axios from "axios";
import API from "../services/api";

function AIAssistant() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await API.post("/ai", { text });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🍓 AI Production Planner</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="p-3 border rounded-lg"
          placeholder="Example: I have 200 kg apples, 100 kg sugar, each jam uses 0.5 kg apples and 0.2 kg sugar..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Thinking..." : "Generate Plan"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {result && (
        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <h2 className="text-lg font-semibold">AI Result:</h2>
          <pre className="whitespace-pre-wrap text-sm mt-2">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;
