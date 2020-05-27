import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export class AddBook extends Component {
    state = { 
        open: "false", 
        title: '',
        author: '' 
    }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
      addBook = () =>{
        const {author, title} = this.state;
        const { handleAddbook } = this.props; // parent prop function
        console.log('hb:', handleAddbook)
        handleAddbook({title, author}); // call parent prop function
   }
    
      openModal() {
        this.setState({ open: "true" });
      }
      closeModal() {
        this.setState({ open: "false" });
      }
    render() {
        const { title, author } = this.state;
        return (
            <div>
                <Popup
        trigger=
        {<button style={btnStyle}>Add book</button>}>
        {close => (
          <div className='card'>
           
            <h3>Add book</h3>
            <div>
              <input type='text'
              name='title'
              placeholder='Enter the title of the book'
                value={title}
                onChange={(e) => this.onChange(e)}
              >
              </input>
              <input type='text'
              name='author'
              placeholder='Enter the author of the book'
                value={author}
                onChange={(e) => this.onChange(e)}
              >
              </input>
            </div>
            <div className="button-group">
              <button  className="close" onClick={close} >Cancel</button>
              <button  className="button-save" onClick={() => this.addBook({title, author})}>Save</button>
              
            </div>
          </div>
        )}
      </Popup>
            </div>
            
        )
    }
}

const btnStyle = {
    cursor: 'pointer',
    marginLeft:'100px'
  }


export default AddBook
