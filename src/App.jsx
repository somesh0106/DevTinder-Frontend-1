import { BrowserRouter, Route,Routes } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Signup from "./Components/signup"
import Feed from "./Components/Feedjsx"


import { Provider } from 'react-redux'
import { AppsStore } from "./Utils/AppStore"
import Connections from "./Components/Connections"
import ConnectionRequests from "./Components/ConnectionRequests"


function App() {
  

  return (
    <>
     <Provider store={AppsStore}>
     <BrowserRouter basename="/">
     <div className="min-h-screen bg-slate-600 text-white"> {/* ✅ here */}
     <Routes>
     <Route path="/" element={<Body/>}>
     <Route path="/" element={<Feed/>}/>

     <Route path="/Login" element={<Login/>}/>
     <Route path="/profile" element= {<Profile/>}/>


    <Route path="/signup" element={<Signup/>}/>
     <Route path="/connections" element={<Connections/>}/>
     <Route path="/connectionrequests" element={<ConnectionRequests/>}/>
     <Route path="/signup" element={<Signup/>}/>



     </Route>




     </Routes>
       </div>
     </BrowserRouter>


</Provider>
   
      
    </>
  )
}

export default App
