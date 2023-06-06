import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

export const New = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    //reset the values of input fields
        setId('');
        setName('');
        setRole('');

    return alert('Entered Values are: '+name+','+ description)


  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
          <Form.Label>Enter Cat Name</Form.Label>
          <Form.Control value={name} onChange={nameChangeHandler} type="text" 
                        placeholder="Enter cat name" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Enter Description:</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={descriptionChangeHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit">
           Submit
        </Button>
      </Form>
  )
}
export default New
