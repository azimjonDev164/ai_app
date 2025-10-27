import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { AIAssistant, NotFound } from "./components";
import { Home, Marketplace, Setting } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ai" element={<AIAssistant />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/maketplace" element={<Marketplace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
