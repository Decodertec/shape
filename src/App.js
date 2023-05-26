import "./App.css";
import { Children, useState } from "react";
const App = () => {
  const [shapes, setShapes] = useState([]);
  const [currentShape, setCurrentShape] = useState("square");
  const addShape = () => {
    setShapes([...shapes, currentShape]);
  };
  return (
    <>
      <select
        onChange={(event) => {
          setCurrentShape(event.target.value);
        }}
        value={currentShape}
      >
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>{" "}
      <div className="container">
        <button onClick={addShape}>Add shape</button>
        <hr />
        {shapes.map((shape, index) => (
          <div className={`${shape}`}>{index}</div>
        ))}
      </div>
    </>
  );
};
export default App;
