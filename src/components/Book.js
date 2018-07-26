import React from 'react';
const Book = (props) => {
    return (
        <div onClick={() => props.onClick(props.id)}>
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.price}</div>
            <br/>
        </div>
    );
};

export default Book;
