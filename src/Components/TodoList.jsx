import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const TodoList = ({ item,index,deleteItem }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        {item}
        <Button
          variant="outline-danger"
          onClick={(e) => {
            deleteItem(index);
          }}
        >
          &times;
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default TodoList;
