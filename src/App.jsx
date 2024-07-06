import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Search from "./Search";

const App = () => {
  return (
    <BrowserRouter>
      <StrictMode>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </StrictMode>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
