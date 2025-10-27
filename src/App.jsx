import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { AIAssistant } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ai" element={<AIAssistant />} />
      </Route>
    </Routes>
  );
}

export default App;
