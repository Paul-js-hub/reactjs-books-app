import React, { Component } from 'react';
import EditBook from '../EditBook/index';
import './book.css'
export class Book extends Component {
    render() {
        const { onDelete } = this.props;
        const title = this.props.title || '';
        const author = this.props.author || '';
        const id = this.props.id || '';

        return (
            <div className='card'>
                <button style={btnStyle} type='delete' onClick={() => onDelete(id)}>Delete</button>
                <EditBook
                    onEdit={this.props.onEdit}
                    id={id}
                    title={title}
                />
                <div className='image'>
                    <img src="JavaScript.png" alt="JavaScript" width="185" height="185" />
                </div>
                <div className='content'>
                    <b><p>{title}</p></b>
                    <p>{author}</p>
                </div>
            </div>

        )
    }
}
const btnStyle = {
    float: 'right'
}




export default Book;