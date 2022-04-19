import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact, getonecontact } from "../redux/actions/ContactActions";
import { useParams, Navigate, useNavigate } from "react-router-dom";
function EditContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = useSelector((state) => state.ContactReducer.contact);
  useEffect(() => {
    dispatch(getonecontact(id));
  }, []);

  const [username, setUsername] = useState(contact.username);
  const [email, setEmail] = useState(contact.email);
  const [age, setAge] = useState(contact.age);
  useEffect(() => {
    setUsername(contact.username);
    setEmail(contact.email);
    setAge(contact.age);
  }, [contact]);

  return (
    <div>
      {" "}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Enter your user name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Enter your age"
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={() => {
            dispatch(editContact(id, { username, email, age }));
            navigate("/contacts");
          }}
        >
          Edit
        </Button>
      </Form>
    </div>
  );
}

export default EditContact;
