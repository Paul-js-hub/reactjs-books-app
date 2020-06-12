import React, { Component } from 'react';
import EditBook from '../EditBook/index';
import './book.css';
import { MDBIcon } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";

export class Book extends Component {
    render() {
        const { onDelete } = this.props;
        const title = this.props.title || '';
        const author = this.props.author || '';
        const id = this.props.id || '';

        return (
            <div className='card'>
                <div className="delete-container">
                    <button className="btn-delete" onClick={() => onDelete(id)}><MDBIcon far icon="trash-alt" /></button>
                </div>
                <EditBook
                    onEdit={this.props.onEdit}
                    id={id}
                    title={title}
                />
                <div className='image'>
                    <img src="Js.png" alt="JavaScript" width="185" height="185" />
                </div>
                <div className="content-title">{title}</div>
                <div className="content-author">by:{author}</div>
            </div>

        )
    }
}




export default Book;