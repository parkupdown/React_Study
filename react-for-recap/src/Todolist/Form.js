const Form = ({ onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Todolist" type="text" />
        <button>제출</button>
      </form>
    </div>
  );
};

export default Form;
