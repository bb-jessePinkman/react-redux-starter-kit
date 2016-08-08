/* eslint-disable no-console */
import React from 'react'; //import react dependency
import ReactDOM from 'react-dom'; //imp reactDOM

const App = function(){   //two more ways of declaring variable, let and const -- const doesn't change, let can.
    return <div>Ebrahim!!</div>;
}


ReactDOM.render(<App />,document.getElementById('app')); //Render takes two args, component that you want to and where to render it.
export default App;       //export module


//react library = react + reactDOM(import both libaries, but react DOM only in parents, in places where you state a position-id,class, for it to be rendered)
//React core library knows how to render and nest components.
// React DOM library knows how to render the components to DOM.
//hot-realoder reloads modified parts of code
