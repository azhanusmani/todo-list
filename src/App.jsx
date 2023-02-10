import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <Container className="mb-5">
      <TodoInput addList={addList} />
      <h1> TODO</h1>
      <hr />
      {listTodo.map((listItem, i) => {
        return (
          <TodoList
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        );
      })}
    </Container>
  );
};

export default App;
