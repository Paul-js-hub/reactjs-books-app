import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import Books from './Books'

class Book extends Component {
    render() {
        const { onDelete, onEdit } = this.props;
        const title = this.props.title || '';
        const id = this.props.id || ''
        return (
            <div style={container}>
                <button style={btnStyle} type='delete' onClick={() => onDelete(id)}>Delete</button>
                <div>
                    <button type='edit' style={btnStyle} onClick={() => onEdit(id)}>Edit</button>
                    {/* <button style={btnStyle} type='edit' onClick={this.onEdit}>Edit</button> */}
                    {/* <button style={btnStyle} onClick={this.saveBook}> Submit</button> */}
                </div>
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