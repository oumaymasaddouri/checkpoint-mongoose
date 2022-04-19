import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/actions/ContactActions";

function ContactCard({ contact }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> {contact.username} </Card.Title>
          <Card.Text>{contact.email}</Card.Text>
          <Card.Text>{contact.age}</Card.Text>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            delete
          </Button>
          <Link to={`/edit/${contact._id}`}>
            {" "}
            <Button variant="info">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactCard;
