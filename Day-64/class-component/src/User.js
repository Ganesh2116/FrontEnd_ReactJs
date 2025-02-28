import React from "react";

export function User()
{
    return React.createElement("div",null,
        React.createElement("h1",null,"hello inner component")
    );
}





// class component.
// import {Component} from "react";

// export default class User extends Component{

//     render()
//     {
//         return(
//             <div>
//                 <h1>hello User </h1>
//             <h1>this is class components</h1>
//             </div>
//         )
//     }
   
// }