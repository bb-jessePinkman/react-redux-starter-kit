import React,{Component} from 'react';  //mention component class

class SearchBar extends Component { //class search extends React.Component {  //React.Component, the component is a class, shorthand is to mention it in import statement
  render() {
    return (
      <div>
        <input type="text" id="search-box"/>
      </div>
    );
  }
}

export default SearchBar;
