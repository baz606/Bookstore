import React from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/books')
             .then(res => {
                 this.setState({books: res.data});
             });
    }

    render() {
        return (
            <BookList books={this.state.books}/>
        );
    }
}

export default App;