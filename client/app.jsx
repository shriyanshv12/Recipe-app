import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import { createContext, useEffect , useState} from "react"
import axios from "axios"
import CreateRecipe from "./CreateRecipe"
import Post from "./Post"
import EditPost from "./EditPost"
import AboutUs from "./AboutUs"

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  });
   const userContext = createContext()
  return (
    <userContext.Provider value={user}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/register" element= {<Register />}> </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<CreateRecipe />}></Route>
      <Route path="/post/:id" element={<Post />}></Route>
      <Route path="/editpost/:id" element={<EditPost />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>

      </Routes>
      </BrowserRouter>
      </userContext.Provider>
  )
}

export default App
