import View from "./components/View"
import Home from "./screens/Home"

const App = () => {
    return (
        <>
            <View />
            <Home name={'Sahil'} age={21} salary={12000} />
            <Home name={'Aman'} age={32} salary={23000} />
            <Home name={'Rahul'} age={41} salary={43000} />
        </>
    )
}

export default App