import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { AIAssistant } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AIAssistant />} />
      </Route>
    </Routes>
  );
}

export default App;
