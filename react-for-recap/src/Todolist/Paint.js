const Paint = ({ todoArr }) => {
  return (
    <div>
      <ul>
        {todoArr.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Paint;
