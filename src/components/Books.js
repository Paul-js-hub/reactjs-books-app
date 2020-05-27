import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';
import AddBook from './AddBook'

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


    handleAddbook = (data) => {
        const token = localStorage.getItem('accessToken');
        const { title, author } = data;
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

    

    render() {
        const { books } = this.state;
        return (
            <div>{
                books.map((book) => {
                    return (<Book key={book._id} title={book.title} author={book.author} id={book._id}
                        onDelete={this.deleteBook}
                        onEdit={this.updateBook}
                        
                    />);
                })}
                <AddBook 
                handleAddbook = {this.handleAddbook}
                />
            </div>)

    }

}

export default Books;