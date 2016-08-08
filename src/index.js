/* eslint-disable no-console */
import React,{Component} from 'react'; //import react dependency
import ReactDOM from 'react-dom'; //imp reactDOM
import SearchBar from './class-based-example/searchBar';

//Defining a class
class App extends Component { /* use SearchBar, replaces contents from searchBar.js */
  render() {
    return (
      <div>
      <SearchBar/>
      </div>
    )
  }
}


//Defining a constant to export
/*const App = function(){   //two more ways of declaring variable, let and const -- const doesn't change, let can.
    return <div>Ebrahim!!</div>;
}*/


ReactDOM.render(<App />,document.getElementById('app')); //Render takes two args, component that you want to and where to render it.
//export default App;       //export module


//react library = react + reactDOM(import both libaries)
//React core library knows how to render and nest components.
// React DOM library knows how to render the components to DOM.
//hot-realoder reloads modified parts of code
