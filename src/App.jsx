import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"



function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      
     </Routes>
     <Footer/>
    </>
  )
}

export default App
