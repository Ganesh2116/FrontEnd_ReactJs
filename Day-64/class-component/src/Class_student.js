import { Component } from "react";

export default class Class_student extends Component
{
    render(props)
    {
        return(
            <div style={{backgroundColor:"skyblue"}}>
                <h1>Student data</h1>
                <h2>Name :{this.props.name}</h2>
                <h2>age :{this.props.age}</h2>
            </div>
        )
    }
}