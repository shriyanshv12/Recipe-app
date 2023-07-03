import axios from 'axios'
import {  useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Post() {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/getpostbyid/'+id)
        .then(result=> setPost(result.data))
        .catch(err => console.log(err))
    }, []);

    function deletePost(id) {
  axios.delete(`http://localhost:3001/deletepost/${id}`)
  .then( res => {
    window.location.href = `/`
  })
  .catch(err => console.log(err))
}
  return (
    
    <div className='post_container'>
        <div className='post_post'>
        <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.ingredients}</p>
            <p>{post.makingTime}</p>
            <div>
                    <Link to={`/editpost/${post._id}`}>Edit</Link>
                    <button type="button" onClick={() => deletePost(post._id)}>Delete</button>
            </div>
            
        </div>        
    </div>
    
  )
}

export default Post