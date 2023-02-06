import Form from "./Form";
import Title from "./Title";
import Paint from "./Paint";
import { useState } from "react";

function resetInput(event) {
  event.preventDefault();
  event.target[0].value = "";
}
const App = () => {
  const [todoArr, setTodoArr] = useState([]);

  const onSubmit = (event) => {
    const value = event.target[0].value;
    setTodoArr((current) => [...current, value]);

    resetInput(event);
  };

  const onRemove = (event) => {
    const todoId = event.target.parentElement.id;
    setTodoArr((current) =>
      current.filter((item, index) => index !== todoId * 1)
    );
  };

  return (
    <div>
      <Title count={todoArr.length} />
      <Form onSubmit={onSubmit} />
      <Paint todoArr={todoArr} Remove={onRemove} />
    </div>
  );
};

export default App;
