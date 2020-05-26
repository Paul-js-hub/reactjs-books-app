import React, { Component } from 'react';
import EditBook from './EditBook';
//import AddBook from './AddBook';

export class Book extends Component {
    render() {
        const { onDelete} = this.props;
        const title = this.props.title || '';
        //const author = this.props.author || '';
        const id = this.props.id || '';
        //console.log("tit:", title)
        return (
            <div style={container}>
                <button style={btnStyle} type='delete' onClick={() => onDelete(id)}>Delete</button>
                <EditBook 
                onEdit = {this.props.onEdit}
                id={id}
                title={title}
                />
                {/* <AddBook 
                addBook= {this.props.addBook}
                author={author}
                title={title}
                /> */}
                <p>{title}</p>
            </div>

        )
    }
}
const btnStyle = {
    float: 'right'
}

const container = {
    width: '400px'
}


export default Book;