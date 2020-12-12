import logo from './logo.svg';
import './App.css';
import React ,{component} from 'react';

class App extends React.Component {
  state= {
    Person:{
      fullname:'Hend chaffar',
      bio:'GoMyCode Student',
      imgsrc: <img style={{height:'450px' , width:'350px' , borderRadius:'60%'}} src='./img.jpg' alt=''></img>,
      profession:'Student'
    },
    show:false,
    timer:0,
    intervall: null,

  }
//function !show=false
   hideone =() => {
   this.setState({show:!this.state.show})
   this.setState({timer:0})
 }
//conteur
 componentDidMount() {
  this.setState({
    intervall: setInterval(
      () => this.setState({ timer: this.state.timer + 1 }),
      1000
    )
  });
}


render (){
  return (
<div className='App'>
  { (!this.state.show) ? 
   
  <button className='btn' onClick={this.hideone} >
    Show my profile
  </button>
  :
 <div>
  <button className='btn' onClick={this.hideone}>Hide my profile</button >
  <ul>
    <li style={{color:'whith'}} >{this.state.Person.fullname} </li> 
    <br />
    <li>{this.state.Person.bio} </li>
    <br />
    <li>{this.state.Person.imgsrc} </li>
    <br />
    <li>{this.state.Person.profession} </li>
    <br />
  </ul> 
  <span>{this.state.timer}</span>
  </div>
  }
</div>
)
}
}
export default App;