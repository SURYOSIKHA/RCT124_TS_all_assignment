import React, { useState, useCallback } from 'react';
import MapComponent from './MapComponent';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to search address using Nominatim API
  const handleSearch = useCallback(async (query) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const data = await response.json();
    setSearchResults(data);
  }, []);

  // Handle location selection from search results
  const handleSelectLocation = useCallback((result) => {
    alert(`Selected Location: ${result.display_name}`);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>React Map Application</h1>
      <input
        type="text"
        placeholder="Search for an address"
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />
      <SearchResults results={searchResults} onSelect={handleSelectLocation} />
      <MapComponent />
    </div>
  );
};

// Memoized SearchResults component to avoid unnecessary re-renders
const SearchResults = React.memo(({ results, onSelect }) => (
  <ul>
    {results.map(result => (
      <li key={result.place_id} onClick={() => onSelect(result)} style={{ cursor: 'pointer' }}>
        {result.display_name}
      </li>
    ))}
  </ul>
));

export default App;
