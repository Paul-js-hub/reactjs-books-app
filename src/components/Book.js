// import React, {Component} from 'react';
// import App from '../App'

// class Book extends Component{
//     render(){
//         return this.props.books.map((book) =>(
//             <h3>{ book.title }</h3>
//             ));

//     }
// }

import React, { Component } from 'react';

class Book extends Component {
    render() {
        const title= this.props.title || ''; 
        return (
        <p>{title}</p>
        )
    }
}


export default Book;