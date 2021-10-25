import './Home.css'


const Home = ({name,age,salary}) => {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <h2>Age : {age}</h2>
            <p>Salary : Rs.{salary}</p>
        </div>
    )
}

export default Home