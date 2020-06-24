import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './editbook.css';
import { MDBIcon } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Form, Input } from "antd";


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
          <Button className="btn-edit"><MDBIcon far icon="edit" />
          </Button>}
          position="bottom right"
          >
        {close => (
          <div>
            <h3>Edit book</h3>
            <div>
              <Form.Item>
              <Input type='text'
                value={title}
                onChange={(e) => this.onChange(e)}
              >
              </Input>
              </Form.Item>
            </div>
            <div className="Button-group">
              <Button className="close" onClick={close} >Cancel</Button>
              <Button className="Button-save" onClick={() => onEdit({id, title})}>Save</Button>
            </div>
          </div>
        )}
      </Popup>
    )
  }
}

export default EditBook
