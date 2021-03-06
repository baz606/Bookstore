import React from 'react';
import Book from './Book';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => <Book key={book.id} {...book} onClick={props.onBookClick}/>)}
        </div>
    );
};

export default BookList;
