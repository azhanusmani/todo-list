import React, { useState } from "react";
import { Form, Button, Row, Col, Stack } from "react-bootstrap";

const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {

    if (e.keyCode === 13) {
        e.preventDefault();
      addList(inputText);
      setInputText("");
    }
  };
  return (
    <Form>
      <Stack gap={2}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Add todo"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              onKeyDown={handleEnterPress}
            />
          </Col>
          <Col xs="auto">
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
      </Stack>
    </Form>
  );
};

export default TodoInput;
