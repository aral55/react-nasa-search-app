import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ImageDetails from "./ImageDetails";
import ContextProvider from "../provider/ContextProvider";
import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [validSearch, setValidSearch] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setSearchResults={setSearchResults}
                searchResults={searchResults}
                setValidSearch={setValidSearch}
                setLoading={setLoading}
                loading={loading}
                validSearch={validSearch}
              />
            }
          />
          <Route path="/images/:id" element={<ImageDetails />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;