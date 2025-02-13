import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import NasaLogo from "./NasaLogo";
import "../styles/App.css";

function Home({
  setSearchResults,
  setValidSearch,
  setLoading,
  loading,
  validSearch,
  searchResults,
}) {
  return (
    <div className="App">
      <NasaLogo />
      <Search
        setSearchResults={setSearchResults}
        setValidSearch={setValidSearch}
        setLoading={setLoading}
        loading={loading}
      />
      <SearchResults
        searchResults={searchResults}
        validSearch={validSearch}
        loading={loading}
      />
    </div>
  );
}

export default Home;