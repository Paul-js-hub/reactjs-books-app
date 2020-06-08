import React, { Component } from 'react';
import Book from '../Book/index';
import axios from 'axios';
import AddBook from '../AddBook/index';
import './books.css'

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
        axios.get(process.env.REACT_APP_API_URL +'/books',
            {
                headers: {
                    "auth-token": token
                }
            }
        )
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch((error) => {
                console.log('err: ', error);
                ;
            });
    }


    handleAddbook = (data) => {
        const token = localStorage.getItem('accessToken');
        const { title, author } = data;
        axios.post(process.env.REACT_APP_API_URL + '/books', { title, author }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": token,
            },

        })
            .then(() => {
                this.fetchBooks();
            })
    }

    updateBook = (book) => {
        const newBook = { title: book.title }
        axios.put(`process.env.REACT_APP_API_URL/books/${book.id}`, newBook)
            .then(() => {
                this.fetchBooks()
            })
    }

    deleteBook = (id) => {
        axios.delete(process.env.REACT_APP_API_URL +`/books/${id}`)
            .then(() => {
                this.fetchBooks();
            })
    }



    render() {
        const { books } = this.state;
        return (
            <div className="books-container">{
                books.map((book) => {
                    return (<Book key={book._id} title={book.title} author={book.author} id={book._id}
                        onEdit={this.updateBook}
                        onDelete={this.deleteBook}
                    />);
                })}
                <AddBook
                    handleAddbook={this.handleAddbook}
                />
            </div>)

    }

}

export default Books;