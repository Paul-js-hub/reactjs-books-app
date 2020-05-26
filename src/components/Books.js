import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';
//import { Link } from "react-router-dom";

class Books extends Component {
    state = {
        books: [],
        title: "",
        author: ""
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        const token = localStorage.getItem('accessToken')
        axios.get('http://localhost:80/api/books',
            {
                headers: {
                    "auth-token": token
                }
            }
        )
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
        const token = localStorage.getItem('accessToken');
        const { title, author } = this.state;
        console.log("author:", author)
        axios.post('http://localhost:80/api/books', { title, author }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": token
            },

        })
            .then(() => {
                this.fetchBooks();
            })
    }

    updateBook = (book) => {
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
        this.setState({ title: event.target.value });
        this.setState({ author: event.target.value })
    }



    render() {
        const { books } = this.state;
        return (
            <div>{
                books.map((book) => {
                    return (<Book key={book._id} title={book.title} author={book.author} id={book._id}
                        onDelete={this.deleteBook}
                        onEdit={this.updateBook}
                        addBook={this.handleAddbook}
                    />);
                })}
                {/* <div>
                    <input name="title" onChange={(event) => this.onChange(event)} />
                    <input name="author" onChange={(event) => this.onChange(event)} />
                    <button type="button" onClick={this.handleAddbook}>Add book</button>
                </div> */}
                    {/* <Link>
                        <img src="JavaScript.png" alt="JavaScript" width="185" height="185" />
                    </Link>
                    <div className="container">
                        <h4><b>JavaScript</b></h4>
                    <span>Paul Onchera</span>
                    </div> */}
            </div>)

    }

}

export default Books;