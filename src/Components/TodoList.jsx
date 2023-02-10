import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Row, Col } from "react-bootstrap";

const TodoList = ({ item, index, deleteItem }) => {
  return (
    <ListGroup className="list-group list-group-flush">
      <ListGroup.Item className="">
        <Row>
          <Col> {item}</Col>
          <Col>
            <Button
              variant="outline-danger"
              onClick={(e) => {
                deleteItem(index);
              }}
            >
              &times;
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default TodoList;

