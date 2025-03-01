import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import Form from './component/Form';
import Showbtn from './component/Showbtn';
import AdminGuest from './component/AdminGuest';
import User from './component/User';
import User2 from './component/User2';


// function App() {
//   const [name,setName] = useState("shtial");
//   function getData()
//   {
//     alert("this is function in app which we pass as props")
//   }
//   return (
//     <div className="App">
//     {/* <Showbtn/>   */}
//     {/* <Form/> */}
//     {/* <AdminGuest/> */}
//     {/* <User data ={getData}/> */}
//     <h1>Render method in react</h1>
//     <User2 name={name} />
//     <button onClick={ ()=>setName("patil")}>update name</button>
//     </div>

//   );
// }


class App extends Component
{
 constructor()
 {
  super();
  console.log("inside constructor..");
  this.state ={ 
    data : "geet",
    count : 0
  }
 }

 componentDidMount()
 {
  console.log("inside component did mount methiod....");
 }

 componentDidUpdate(preProps,preState,snapshot)
 {
  console.log("inside component did update methiod....",preProps,preState,snapshot);
  if (this.state.count<10)
  {
    this.setState({count :this.state.count+1})
  }
 }

shouldComponentUpdate()
{
  console.log("should component update...",this.state.count)
  if (this.state.count >=1 && this.state.count <10)
  {
    return true;
  }
 else
  {
    return false;
  }
}

 render()
 {
  console.log("render..");
  return(
    <div>
      {/* <h1>component did mount {this.state.name}</h1>
      <button onClick={()=>{this.setState({name:"ganesh"})}}>update name</button> */}

      {/* <h1>component did update {this.state.name}</h1>
      <button onClick={()=>{this.setState({count:1})}}>update count</button> */}

      <h1>should component update   {this.state.count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count +1})}}>update count</button>
    </div>
  )

 }
}

export default App;
