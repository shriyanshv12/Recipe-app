import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from './App'

function CreateRecipe() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [ingredients, setIng] = useState()
    const [makingTime, setTime] = useState()
    const user = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        
        formData.append('title', title),
        formData.append('description', description),
        formData.append('file', file),
        formData.append('ingredients', ingredients),
        formData.append('makingTime', makingTime),
        formData.append('user', user)

        axios.post('http://127.0.0.1:3001/create', formData, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
  }})
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="post_container">
      <div className="post_form">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter Title" onChange={e => setTitle(e.target.value)}/>
  <textarea
    name="desc"
    id="desc"
    cols="30"
    rows="10"
    placeholder="Enter Description"
    onChange={e => setDescription(e.target.value)}
  ></textarea>
  <input type="text"  placeholder="Ingredients" onChange={e => setIng(e.target.value)}/>
  <input type="text" placeholder="Making Time" onChange={e => setTime(e.target.value)}/>
  <input type="file" className="file" placeholder="Select File" 
  onChange={e => setFile(e.target.files[0])}/>
  <button type="Submit" >Post</button>
</form>
      </div>
    </div>
  );
}

export default CreateRecipe;