import React from 'react';
const Book = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.price}</div>
            <br/>
        </div>
    );
};

export default Book;
