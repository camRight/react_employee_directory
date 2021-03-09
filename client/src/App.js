import './App.css';
import Button from "./Components/Button/Button";
import Table from "./Components/Table/Table";
import Api from "./utils/Api";

function App() {
  return (

    
    <div className="App">
      Hello World
      <Button color="success" text="ABC Desc" />
      <Button color="success" text="ABC Asc" />

      <Table />
    </div>
  );
}

export default App;
