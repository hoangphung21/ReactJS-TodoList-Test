import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="header">
        <h2>My Todo List</h2>
        <input type="text" className="myInput" placeholder="Title .." />
        <span onClick={newElement} className="addBtn">Add</span>
      </div>
    </div>
  );
}

function newElement() {
  console.log("add click");
}

export default App;
