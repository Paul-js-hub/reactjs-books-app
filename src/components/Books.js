import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';

class Books extends Component {
    state = {
        books: [],
        book:{}
    }

    componentDidMount = () =>{
        axios.get('http://localhost:50/api/books')
        .then(res => {
            //console.log('response', res)
            this.setState({res});
        });
    }


    handleAddbook = () =>{
        const newBook = this.state.book;
        const books = this.state.books;
        books.push(newBook);
        this.setState({books})
        console.log("hey we are here")
    }

    onChange=(event)=>{
        const title = event.target.value || "";
        const book = { id:45, title}
        this.setState({book});
    }

    render() {
        const books = this.state.books;
        return (<div>{
            books.map((book) =>{
            return(<Book key={book.id} title={book.title}/>);
        })}
        <div>
            <input name="title" onChange={this.onChange}/>
            <button type="button" onClick={this.handleAddbook}>Add book</button>
         </div>
        </div>)
        
    }

}

export default Books;