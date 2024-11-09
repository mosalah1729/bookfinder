import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.key} className="book">
            <h3>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </h3>
            <p>
              Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}
            </p>
            <p>First published: {book.first_publish_year || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default BookList;
