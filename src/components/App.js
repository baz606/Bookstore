import React from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: this.props.initialData
        };
    }

    render() {
        return (
            <BookList books={this.state.books}/>
        );
    }
}

export default App;
