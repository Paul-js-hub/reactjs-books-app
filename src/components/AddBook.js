import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export class AddBook extends Component {
    state = { 
        open: "false", 
        bookTitle: '',
        bookAuthor: '' 
    }

    componentDidMount() {
        const { title, author } = this.props;
        this.setState({ title });
        this.setState({ author })
      }
      onChange = (e) => {
        this.setState({ title: e.target.value })
        this.setState({ author: e.target.value })
      }
    
      openModal() {
        this.setState({ open: "true" });
      }
      closeModal() {
        this.setState({ open: "false" });
      }
    render() {
        const { title, author } = this.state;
        const { addBook } = this.props;
        return (
            <Popup
        trigger=
        {
          <button style={btnStyle}>Add book</button>}>
        {close => (
          <div>
            <h3>Add book</h3>
            <div>
              <input type='text'
                value={title}
                onChange={(e) => this.onChange(e)}
              >
              </input>
              <input type='text'
                value={author}
                onChange={(e) => this.onChange(e)}
              >
              </input>
            </div>
            <div className="button-group">
              <button className="close" onClick={close} >Cancel</button>
              <button className="button-save" onClick={() => addBook({author, title})}>Save</button>
            </div>
          </div>
        )}
      </Popup>
        )
    }
}

const btnStyle = {
    float: 'right',
    cursor: 'pointer'
  }
export default AddBook
