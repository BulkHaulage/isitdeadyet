import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
	<LoginForm />
      </header>
    </div>
  );
  }
}

class LoginForm extends React.Component {

 constructor(props){
   super(props)
   this.state = { username: '', userData: 'Press Enter'};
 }

 handleChange = event => {
   this.setState({username: event.target.value})
   if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
           getData(this.state.username, this)

},500);
 };
 //handleEnter() {
//   getData(this.state.username, this)
 //};
render() {
   return (
     <React.Fragment>
         <label htmlFor="username">HCIM </label><input
           type="text"
           name="username"
           value={this.state.username}
           onChange={this.handleChange}
           //onKeyPress={e => {if (e.key === 'Enter') { this.handleEnter()}}}
         />{this.state.userData}
       <h3>Your username is: {this.state.username}</h3>
     </React.Fragment>
   );
 }
}

function getData(name, boss) {
  console.log(name)
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', () => {
     var data = xhr.response;
     if (data.search("was not found")>0){
       boss.setState({userData: "is not in the hiscores"})
	return
     }
     if (data.search("dead hover")>0) {
       boss.setState({userData: "is dead"})
	return
     }
     console.log("RESULT:"+data.search("dead hover"));
       boss.setState({userData: "is alive"})
     return
  })
  xhr.open('GET', 'https://secure.runescape.com/m=hiscore_hardcore_ironman/ranking?table=0&category_type=0&time_filter=0&date=1610390322195&user='+name, true)
  xhr.send()
}
export default App;
