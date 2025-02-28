import logo from './logo.svg';
import './App.css';
import { User } from './User';
import { Component, useState } from 'react';
import Student from './Student';
import Class_student from './Class_student';


function App() {
  const [data,setData] = useState(0)
  const [name ,setName] = useState("ganesh");
  const [age,setAge] = useState("32");
  
  // function Btn()
  // {
  //   alert("this is the function btn");
  // }

  // function BtnClick()
  // {
  //   setData ("React js")
  //   alert("we are learn "+data);
  // }


  function Incr()
  {
    setData(data + 1);
  }
 
  function Decr()
  {
    setData(data - 1);
  }

  function Counter()
  {
    return(
      <div>
        <button onClick={Incr}>increase+</button>
      <h1>Counter :{data}</h1>
      <button onClick={Decr}>decrease-</button>
      </div>
    )
  }
  return (
    <div className="App">
      {/* <button onClick={Btn}>Click me function</button>
      <button onClick={()=> alert("this is arrow function alert button ")}>Click me arrow function</button>
      <User/> */}
      {/* <h1>we are learn {data}</h1>
      <button onClick={BtnClick}>clike me</button> */}

      {/* <Counter/>
      <App_component/> */}
      {/* <Counter/> */}
      {/* <Student name = "ganesh" age = "23" rno = "13" address = {{city :"basmath", country : "UK"}} />
      <Student name ="rushi" age = "21" rno = "11" address = {{city :"bhoripgoan", country : "UK"}} /> */}


        {/* <Student name= {name} />
        <button on onClick={ ()=> setName("bharti")}>Change first  name to last name</button> */}

        {/* <Class_student name={name} age={age}/>
        <button onClick={()=>{
          setName("bharti");
          setAge("100");
        }}>change data</button> */}

        <Data_print/>
    </div>
  );
}



class App_component extends Component
{
  constructor()
  {
    super();
    this.state={data:"javascript"};
  }

  CallComponent()
  {
    this.setState({data:"react"});
  }

  render()
  {
    return(
      <div>
        <h1>App Component</h1>
        <h1>this is :{this.state.data}</h1>
        <button onClick={()=>this.CallComponent()}>on Click</button>
      </div>
    )
  }

}


class Counter extends Component
{

 constructor()
 {
  super();
  this.state({data:0})
 }

 Increase()
 {
    this.setState({data :this.state.data+1});
 }

 Decrease()
 {
    this.setState({data : this.state.data -1});
 }


 render()
 {
  return(
    <div>
      <button onClick={()=>this.Increase()}>increase</button>
      <h1>counter{this.state.data}</h1>
      <button onClick={()=>this.Decrease()}>decrease</button>
      </div>
  )
 }
}


function Data_print()
{
   const [data,setData] = useState(null);
   const[print,setPrint] = useState(false);

   function getData(val)
   {
    setData(val.target.value)
  }

  return(
    <div className='App'>

      <h1> Welcome</h1>

       {
         print ? <h1>{data} </h1> : null
       }
      <input type= "text" onChange={getData}/> 
      
      <button onClick={ () => setPrint(true) }> Print </button>
       </div>
  )
}
  



export default App;
