import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addcontact } from "../redux/actions/ContactActions";
function AddContact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
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
          <Form.Label>age</Form.Label>
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
            dispatch(addcontact({ username, email, age }));
            navigate("/contacts");
          }}
        >
          add
        </Button>
      </Form>
    </div>
  );
}

export default AddContact;
