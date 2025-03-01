import { useState } from "react"

export default function Showbtn()
{
    const [status,setStatus] = useState(false);
    return(
        <div>
              <h1>Welcome</h1>
            {
                status ? <h1>hello students</h1> :null
            }
{/* 
<button onClick={() => setStatus(false)} >hide </button>
<button onClick={() => setStatus(true)} >show</button> */}
<button onClick={() => setStatus(!status)} >toggle</button>
        </div>
    )
}