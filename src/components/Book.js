import React, { Component } from 'react';
import EditBook from './EditBook';

export class Book extends Component {
    render() {
        const { onDelete } = this.props;
        const title = this.props.title || '';
        const author = this.props.author || '';
        const id = this.props.id || '';

        return (
            <body style={bodyStyle}>
            <div style={container}>
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
            </body>

        )
    }
}
const btnStyle = {
    float: 'right'
}

const container = {
    width: '250px',
    border:'2px solid black',
    margin:'5px',
    padding: '10px',
    borderRadius:'10px solid black'
}

const bodyStyle ={
    textAlign:'center',
    placeItems:'center'
}


export default Book;