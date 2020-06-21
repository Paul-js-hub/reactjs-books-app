import React, { Component } from "react";
import "./addbook.css";
import axios from "axios";
import { toast } from "react-smart-toaster";

export class AddBook extends Component {
  state = {
    title: "",
    author: "",
    bookImage: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddbook = () => {
    const token = localStorage.getItem("accessToken");
    const { title, author, bookImage } = this.state;
    console.log("bk::", bookImage);
    const fd = new FormData();
    fd.append("bookImage", bookImage);
    fd.append("title", title);
    fd.append("author", author);
    axios
      .post(process.env.REACT_APP_API_URL + "/books", fd, {
        headers: {
          "auth-token": token,
        },
      })
      .then((response) => {
        const message = response.data.message;
        toast.success(message);
        if (message === "Your book has been successfully uploaded") {
          this.props.history.push("/");
        }
      })
      .catch((err) => {
        const message = err.response.data.message;
        toast.error(message);
      });
  };

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({ bookImage: event.target.files[0] });
  };

  render() {
    return (
      <div className="addbook-container">
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
            <button className="btn-close">Cancel</button>
            <button className="button-save" onClick={this.handleAddbook}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
