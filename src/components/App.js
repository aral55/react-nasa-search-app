import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "../provider/ContextProvider";
import ImageDetails from "./ImageDetails";
import Home from "./Home";
import "../styles/App.css";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [validSearch, setValidSearch] = useState ([]);
  const [loading, setLoading] = useState ([]);

  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" 
      element= {
        <Home 
      setSearchResults={setSearchResults}
      searchResults={searchResults}
      validSearch={validSearch}
      setValidSearch={setValidSearch}
      loading={loading}
      setLoading={setLoading}      
      />
      }
      />
      <Route path="/image/:id" element={<ImageDetails />} />
    </Routes>
    </BrowserRouter>
    </ContextProvider>

    
  );
}

export default App;
