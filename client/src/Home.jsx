import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getposts')
    .then(posts => {
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
  },[posts])

  return (
    <div className='posts_container'>
      {
        posts.map(post => (
          <Link to={`/post/${post._id}`} className='post' key={post._id}> 
          
          <img src={`http://127.0.0.1:3001/Images/${post.file}`} alt="" />
          <div className='post_text'>
            <h2>Foodname:  {post.title}</h2>
            <p>Description:  {post.description}</p>
            <p>Ingrdients:  {post.ingredients}</p>
            <p>Cooking Time: {post.makingTime}</p>
          </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home