import Header from "./components/Header"
import Portofolio from "./components/Portofolio"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
// import { NotFound } from './components/NotFound'



function App() {
    return (

        <Routes>
            <Route path="/" element={<Header ></Header>}></Route>
            <Route path="/portofolio" element={<Portofolio />}></Route>
            <Route path="/about" element={<Footer />}></Route>
            {/* <Route path="*" element={<NotFound />}></Route> */}
            <Route path="*" Component={NotFound}></Route>
            {/* only use normal function */}


        </Routes>

    )
}
export default App