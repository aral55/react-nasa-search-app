import React from 'react';
import NasaLogo from "./NasaLogo";
import Search from './Search';
import SeachResults from "./SearchResults";
import "../styles/App.css";


function Home ({
setSearchResults,
setValidSearch,
setLoading,
loading,
validSearch,
searchResults,
}) {
    return (
        <div className='App'>
        <NasaLogo />
        <Search 
        setSearchResults={setSearchResults}
        setValidSearch={setValidSearch}
        setLoading={setLoading}
        loading={loading}
        />
        <SeachResults
        searchResults={searchResults}
        validSearch = {validSearch}
        loading = {loading}
        />
        </div>
    );
}

export default Home;
