import React, { useState } from "react";
import Home from "./Home";
import "../styles/App.css";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [validSearch, setValidSearch] = useState ([]);
  const [loading, setLoading] = useState ([]);

  return (

    <div className="App">
      <Home />

      
    </div>
  );
}

export default App;
