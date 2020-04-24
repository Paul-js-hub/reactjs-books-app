import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    state = {
        books: [
            {
                id: 1,
                title: 'React Tutorials'
            },
            {
                id: 2,
                title: 'JavaScript Tutorials for beginners'
            },
            {
                id: 3,
                title: 'CSS3'
            },
            {
                id: 4,
                title: 'HTML5'
            },
            {
                id: 5,
                title: 'Bootstrap'
            },
            {
                id: 6,
                title: 'Java'
            }
        ],
        book:{},
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
            <input name="title" onChange={(e)=> this.onChange(e)}/>
            <button type="button" onClick={() => this.handleAddbook ()}>Add book</button>
         </div>
        </div>)
        
    }

}

export default Books;