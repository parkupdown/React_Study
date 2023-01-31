import Form from "./Form";
import Title from "./Title";
import Paint from "./Paint";
import { useState } from "react";
const App = () => {
  const [todo, setTodo] = useState(``);
  const [todoArr, setTodoArr] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    event.target[0].value = "";

    setTodoArr((current) => [...current, todo]);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setTodo(value);
  };

  return (
    <div>
      <Title />
      <Form onSubmit={onSubmit} onChange={onChange} />
      <Paint todoArr={todoArr} />
    </div>
  );
};

export default App;
