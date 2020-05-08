import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';

class Books extends Component {
    state = {
        books: [],
        title: ""
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        axios.get('http://localhost:50/api/books')
            .then(res => {
                console.log('response', res)
                this.setState({ books:res.data });
            });
    }


    handleAddbook = () => {
        const {title} = this.state;
        console.log("title", title)
        axios.post('http://localhost:50/api/books', {title}, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

    }

    onChange = (event) => {
        this.setState({ title: event.target.value })
    }

    render() {
        const books = this.state.books;
        return (<div>{
            books.map((book) => {
                return (<Book key={book.id} title={book.title} />);
            })}
            <div>
                <input name="title" onChange={(event) =>this.onChange(event)} />
                <button type="button" onClick={this.handleAddbook}>Add book</button>
            </div>
        </div>)

    }

}

export default Books;