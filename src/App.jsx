import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import useLocalStorage from "./Hooks/useLocalStorage";

const App = () => {
  const [listTodo, setListTodo] = useLocalStorage("listTodo",[]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <Container className="mt-5 justify-content-center">
      <TodoInput addList={addList} />
      <h1 className="mt-2"> ToDo's</h1>
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
