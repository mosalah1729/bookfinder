import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import BookList from './BookList';
import BookDetails from './BookDetails';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${query}`
    );
    const data = await res.json();
    setBooks(data.docs || []);
  };

  return (
    <Router>
      <div className="app">
        <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookDetails books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
