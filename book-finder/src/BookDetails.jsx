import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetails({ books }) {
  const { id } = useParams();
  const book = books.find((book) => book.key === id);
  console.log('bookdetails', books);
  if (!book) {
    return <p>Book details not found.</p>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
      <p>First published: {book.first_publish_year || 'N/A'}</p>
      <p>Publisher: {book.publisher ? book.publisher.join(', ') : 'N/A'}</p>
      <p>ISBN: {book.isbn ? book.isbn.join(', ') : 'N/A'}</p>
      <p>Subject: {book.subject ? book.subject.join(', ') : 'N/A'}</p>
    </div>
  );
}

export default BookDetails;
