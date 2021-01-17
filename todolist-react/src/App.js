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

      <ul id="myUL">
        <li>Hit the gym</li>
        <li class="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </div>
  );
}

// Create new list after hitting ADD button
function newElement() {
  console.log("add click");
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {
    alert("You have to write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myUL").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);



}

export default App;
