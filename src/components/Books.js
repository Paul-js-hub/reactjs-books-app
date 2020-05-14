import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';

class Books extends Component {
    state = {
        books: [],
        title: "",
    }

    componentDidMount() {
        this.fetchBooks();
    }

     fetchBooks = () => {
        axios.get('http://localhost:80/api/books')
            .then(res => {
                console.log('response', res)
                this.setState({ books: res.data });
            })
            .catch((error) => {
                console.log('err: ', error);
                ;
            });
    }


    handleAddbook = (event) => {
        const { title } = this.state;
        console.log("title:", title)
        axios.post('http://localhost:80/api/books', { title }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

        })
            .then(() => {
                this.fetchBooks();
            })
    }
    
    updateBook =  (book) => {
        const newBook = { title: book.title }
        axios.put(`http://localhost:80/api/books/${book.id}`, newBook)
            .then(() => {
                this.fetchBooks()
            })
    }

    deleteBook = (id) => {
        console.log('id', id)
        axios.delete(`http://localhost:80/api/books/${id}`)
            .then(() => {
                this.fetchBooks();
            })
    }

    onChange = (event) => {
        this.setState({ title: event.target.value })
    }



    render() {
        const { books } = this.state;
        return (
            <div>{
                books.map((book) => {
                    return (<Book key={book._id} title={book.title} id={book._id}
                        onDelete={this.deleteBook}
                        onEdit={this.updateBook}
                    />);
                })}
                <div>
                    <input name="title" onChange={(event) => this.onChange(event)} />
                    <button type="button" onClick={this.handleAddbook}>Add book</button>
                </div>
            </div>)

    }

}

export default Books;