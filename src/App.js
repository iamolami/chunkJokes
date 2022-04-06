import "./styles/App.css";
import Index from "./views/Index";
import Details from "./components/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route exact path="/jokes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
