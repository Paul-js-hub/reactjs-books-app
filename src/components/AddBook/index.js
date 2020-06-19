import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./addbook.css";
//import axios from 'axios';

export class AddBook extends Component {
  state = {
    open: "false",
    title: "",
    author: "",
    bookImage: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addBook = () => {
    const { author, title, bookImage } = this.state;
    const { handleAddbook } = this.props; // parent prop function
    handleAddbook({ title, author, bookImage }); // call parent prop function
    console.log("hd:", handleAddbook)
  };

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({ bookImage: event.target.files[0] });
  };

  openModal() {
    this.setState({ open: "true" });
  }
  closeModal() {
    this.setState({ open: "false" });
  }

  render() {
    return (
      <div className="addbook-container">
        <Popup
          trigger={
            <button className="addbook-btn">
              <i className="fa fa-plus my-float"></i>
            </button>
          }
          position="left bottom"
          arrow={false}
        >
          {(close) => (
            <div className="popup-container">
              <div className="add-book-header">
                <h3>Add book</h3>
              </div>
              <div className="add-book-input-container">
                <input
                  className="add-book-input-details"
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  onChange={(e) => this.onChange(e)}
                ></input>
                <input
                  className="add-book-input-details"
                  type="text"
                  name="author"
                  placeholder="Enter the author"
                  onChange={(e) => this.onChange(e)}
                ></input>
              </div>
              <div className="input-file-wrapper">
                <label>Select image:</label>
                <input
                  className="upload-bookimage"
                  type="file"
                  accept="image/*"
                  name="bookImage"
                  onChange={this.fileSelectedHandler}
                ></input>
              </div>
              <div className="button-group">
                <button className="btn-close" onClick={close}>
                  Cancel
                </button>
                <button
                  className="button-save"
                  onClick={() => this.addBook}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

export default AddBook;
