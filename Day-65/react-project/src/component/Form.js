import { useState } from "react"

export default function Form()
{
    const [name ,setName] = useState("");
    const [city, setCity] = useState("");
    const [status,setStatus] = useState(false);

    function getFromData(e)
    {
        console.log(name,city,status);
        e.preventDefault();
    }
    return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={getFromData}>
                <input type="text" placeholder="Enter Name"  onChange={(e) => setName(e.target.value)} /> <br />

                <select onChange={(c)=>setCity(c.target.value)}>
                <option >select city</option>
                <option >pune</option>
                <option >goa</option>
                <option >Nanded</option>
                <option >Nagpur</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(c) => setStatus(c.target.value)} /> <b>Term and Conditions</b> <br /><br />

                <button type="submit">submit</button>
            </form>

        </div>
    )
}