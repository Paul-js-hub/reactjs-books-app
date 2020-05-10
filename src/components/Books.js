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
        axios.get('http://localhost:8001/api/books')
            .then(res => {
                console.log('response', res)
                this.setState({ books: res.data });
            });
    }


    handleAddbook = () => {
        const { title } = this.state;
        console.log("title", title)
        axios.post('http://localhost:8001/api/books', { title }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

    }

    updateBook(id) {
        const newBook = {
            title: 'stat'
        }
        axios.put(`http://localhost:8001/api/books/3`, newBook, {
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(

            )
        })
            .then(res => {
                console.log('response', res)
                //this.setState({ books: res.data });
            });
    }

    deleteBook = (id) => {
        if (window.confirm('Are you sure?')) {
            axios.delete(`http://localhost:8001/api/books/{this.state.id}`)
        }
    }

    onChange = (event) => {
        this.setState({ title: event.target.value })
    }

    render() {
        const books = this.state.books;
        return (<div>{
            books.map((book) => {
                return (<Book key={book.id} title={book.title}
                    onDelete={this.deleteBook}
                    onEdit={this.updateBook}
                />);
            })}
            <div>
                <button type='edit' onClick={this.updateBook}>Edit</button>
                <input name="title" onChange={(event) => this.onChange(event)} />
                <button type="button" onClick={this.handleAddbook}>Add book</button>

            </div>
        </div>)

    }

}

export default Books;