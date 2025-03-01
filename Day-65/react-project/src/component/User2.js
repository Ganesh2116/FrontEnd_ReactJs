import { Component } from "react";

export default class User2 extends Component
{
 constructor()
 {
  super();
  console.log("inside constructor..");
  this.state ={ 
    gamil : "geet@gmail.com"
  }
 }

 render()
 {
    console.log("render method in user .....",this.props.name);
    console.log("render method in user .....",this.props);
    return(
    <div>
      <h1>user data </h1>
      <button onClick={ ()=>this.setState ({email :"ganesh@gmail.com"})}> update</button>
    </div>
  )

 }
}