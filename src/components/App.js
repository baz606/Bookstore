import React from 'react';
import BookList from './BookList';

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
