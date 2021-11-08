import { useState } from "react"

const State = () => {


    const [name,setName] = useState('Sahil')
    const [age,setAge] = useState(21)

    // var name = "Sahil"
    // var age = 21

    function click() {

        setName('Ram')
        setAge(21)
        // console.log("button clicked")
        console.log(name,age)
    }


    return (
        <div>
            <h1>Hello, {name}</h1>
            <h2>my age is {age}</h2>
            <button onClick={click}>Click</button>
        </div>
    )
}

export default State
