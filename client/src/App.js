import './App.css';
import Button from "./Components/Button/Button";
import Table from "./Components/Table/Table";
import Home from "./Pages/Home";
import Api from "./utils/API";



// where you put routes.
function App() {
  return (

    // it's a triangle
    // app is the top of the triangle (react routes)
    // next (second tier) pages (states and hook)
    // child components can see the change to the states and hooks
    // states and hooks are data storage--they perform the same task.
    // by allowing child components to see the changes to data in s&h.
    // hooks are more flexible. can only have 1 state object. 
    // hooks have more SET functions.
        // any data types for hooks.
    // hooks... training wheels are off. you maintain everything.
            // more control
    // global variable -- children cannot see changes
    // third (components)

    // React: like a tree branching out (upside down)
    <div className="App">

      IS IT WORKING? yes.
    <Home />

    </div>
  );
}

export default App;
