import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            placeholder="Add todo"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </Col>
        <Col>
          <Button
            onClick={() => {
              addList(inputText);
              setInputText("");
            }}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row className="my-5"></Row>
    </Form>
  );
};

export default TodoInput;
