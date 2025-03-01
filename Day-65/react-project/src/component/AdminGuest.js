import { useState } from "react"

export default function AdminGuest()
{
    // const [login,setLogin] = useState(false);
    const [login,setLogin] = useState(3);
    return (
        <div>
            {/* {login ? <h1>Welocome Admin</h1>: <h1>Welcome Guest</h1> } */}

            { login == 1 ? <h1>Welocome Admin</h1>: login == 2 ? <h1>Welcome Guest</h1> : <h1>Welcome User</h1>  }
        </div>
    )
}