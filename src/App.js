import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

function App() {
  const [results, setResults] = useState([])
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResult results={results} />
      </div>
    </div>
  );
}

export default App;
