import React from 'react';
import BookList from './BookList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: this.props.initialData
        };
    }

    fetchRatingForBook(bookId) {
        console.log(`Book ${bookId} clicked!`);
    }

    render() {
        return (
            <BookList books={this.state.books} onBookClick={this.fetchRatingForBook}/>
        );
    }
}

export default App;
