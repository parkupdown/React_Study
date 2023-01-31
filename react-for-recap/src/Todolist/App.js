import Form from "./Form";
import Title from "./Title";
import Paint from "./Paint";
import { useState } from "react";
const App = () => {
  const [todoArr, setTodoArr] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const value = event.target[0].value;
    event.target[0].value = "";

    setTodoArr((current) => [...current, value]);
  };

  const onRemove = (event) => {
    const todoId = event.target.parentElement.id;
    setTodoArr((current) =>
      current.filter((item, index) => index !== todoId * 1)
    );
  };

  return (
    <div>
      <Title />
      <Form onSubmit={onSubmit} />
      <Paint todoArr={todoArr} Remove={onRemove} />
    </div>
  );
};

export default App;
