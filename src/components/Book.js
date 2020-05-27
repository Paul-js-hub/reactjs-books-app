import React, { Component } from 'react';
import EditBook from './EditBook';

export class Book extends Component {
    render() {
        const { onDelete} = this.props;
        const title = this.props.title || '';
        const author = this.props.author || '';
        const id = this.props.id || '';

        return (
            <div style={container}>
                <button style={btnStyle} type='delete' onClick={() => onDelete(id)}>Delete</button>
                <EditBook 
                onEdit = {this.props.onEdit}
                id={id}
                title={title}
                />
                <img src="JavaScript.png" alt="JavaScript" width="185" height="185" />
                <b><p>{title}</p></b>
                <p>{author}</p>
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