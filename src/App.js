import './App.css';
import Event from './Event/Event';
import NavBar from './NavBar/NavBar';
import ToDoList from './ToDoList/ToDoList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ToDoList/>
    </div>
  );
}

export default App;
