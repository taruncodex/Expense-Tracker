import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { History } from "./pages/History";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
function App() {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
