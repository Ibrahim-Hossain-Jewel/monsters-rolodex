import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list-component';
import { Searchbox } from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    //state is the data container.
    this.state = {
      monster: [],
      searchField: ''
    }
  }
  //now call the fetch api here.
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(dataFile => dataFile.json()).then(monsterName => this.setState({monster: monsterName}));
  }
  //now make an user defined function for class componenet.
  //arrow function automatically atttached to the component class or inside componenet class contructor so dosen't need to attach to the contructor fuction
  handleChange = e => {
    this.setState({searchField: e.target.value});
  }
  render(){
    const { monster, searchField } = this.state;
    const soughtMonster = monster.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    //soughtMonster return monsterObject
    /* onChange accept the synthetic event on the input tag*/
    return(
      <div className="App">
        <h2>Monster Rolodex</h2>
        <Searchbox placeholder = "Search Monster" handleChange = {this.handleChange}/>
        <CardList monster = {soughtMonster} />
      </div>
    )
  }
}
export default App;