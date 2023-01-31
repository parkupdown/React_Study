const Paint = ({ todoArr, Remove }) => {
  return (
    <div>
      <ul>
        {todoArr.map((todo, index) => (
          <li id={index} key={index}>
            {todo}
            <button onClick={Remove} style={{ marginLeft: "5px" }}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paint;
