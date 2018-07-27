import React from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: this.props.initialData,
            ratings: {}
        };
    }

    fetchRatingForBook(bookId) {
        axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
             .then(resp => {
                 console.log(resp.data)
             })
    }

    render() {
        return (
            <BookList books={this.state.books} onBookClick={this.fetchRatingForBook}/>
        );
    }
}

export default App;
