 import  { useContext } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './App'
import axios from 'axios'

function Navbar() {
    const user = useContext(UserContext)
    const navigate = useNavigate()
    
    const handleLogout = () => {
        axios.get('http://127.0.0.1:3001/logout')
        .then(res => {
            if(res.data === "Success")
            navigate(0)
        }).catch(err => console.log(err))
    }
    
  return (
    <div className='navbar-header'>
        <div><h3>My Recipe</h3></div>
        <div>
            <Link to="/" className='link'>Home</Link>
            {
                
                    <Link to="/create" className='link'>Create</Link>
                
            }
            <a href="/AboutUs" className='link'>About Us</a>
        </div>
        {
            user?
            <div>
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
    
        }
    </div>
  )
}
export default Navbar