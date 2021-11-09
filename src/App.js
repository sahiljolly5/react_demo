import Effect from "./components/Effect"
import State from "./components/State"
import View from "./components/View"
import Conditional from "./components/Conditional"
import Home from "./screens/Home"
import Lists from "./components/Lists"

const App = () => {
    return (
        <>
            {/* <View /> */}
            {/* <Home name={'Sahil'} age={21} salary={12000} /> */}
            {/* <Home name={'Aman'} age={32} salary={23000} />
            <Home name={'Rahul'} age={41} salary={43000} /> */}
            {/* <State /> */}
            {/* <Effect /> */}

            {/* <Conditional isAdmin={false}/> */}
            <Lists />
        </>
    )
}

export default App