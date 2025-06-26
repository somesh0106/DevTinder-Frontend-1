import { BrowserRouter, Route,Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Profile from "./profile"
import Signup from "./signup"


function App() {
  

  return (
    <>
     <BrowserRouter basename="/">
     <Routes>
     <Route path="/" element={<Body/>}>

     <Route path="/Login" element={<Login/>}/>
<Route path="/profile" element= {<Profile/>}/>


<Route path="/signup" element={<Signup/>}/>



     </Route>




     </Routes>
     </BrowserRouter>



   
      
    </>
  )
}

export default App
