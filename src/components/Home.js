import React from 'react';
import NasaLogo from "./NasaLogo";
import Search from './Search';


function Home ({
setSearchResults,
setValidSearch,
setLoading,
loading,
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
        

        </div>
    )
}



export default Home;
