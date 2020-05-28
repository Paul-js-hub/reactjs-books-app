import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './editbook.css';

export class EditBook extends Component {
  state = { 
    open: "false", 
    bookTitle: '' 
  }

  componentDidMount() {
    const { title } = this.props;
    this.setState({ title })
  }
  onChange = (e) => {
    this.setState({ title: e.target.value })
  }

  openModal() {
    this.setState({ open: "true" });
  }
  closeModal() {
    this.setState({ open: "false" });
  }

  render() {
    const { title } = this.state;
    const { id, onEdit } = this.props;
    return (
      <Popup
        trigger=
        {
          <button style={btnStyle}>Edit</button>}>
        {close => (
          <div>
            <h3>Edit book</h3>
            <div>
              <input type='text'
                value={title}
                onChange={(e) => this.onChange(e)}
              >
              </input>
            </div>
            <div className="button-group">
              <button className="close" onClick={close} >Cancel</button>
              <button className="button-save" onClick={() => onEdit({id, title})}>Save</button>
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
export default EditBook