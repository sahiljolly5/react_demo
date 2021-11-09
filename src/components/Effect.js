import { useState,useEffect } from "react"

const Effect = () => {

    const [message,setMessage] = useState('Hello how are you')

    useEffect(() => {
        console.log("Effect called")
    },[])

    function click() {
        setMessage('Bye see you soon')
    }

    return (
        <div>
            <h1>UseEffect Hook</h1>
            <h2>{message}</h2>
            <button onClick={click}>Click</button>
        </div>
    )
}

export default Effect
