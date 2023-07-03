import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [ingredients, setIng] = useState()
    const [makingTime, setTime] = useState()
    const {id} = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://127.0.0.1:3001/editpost/'+id, 
        {title, description, ingredients, makingTime })
        .then(res => {
            if(res.data === "Success")
            {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/getpostbyid/'+id)
        .then(result=> {
            setTitle(result.data.title)
            setDescription(result.data.description)
            setIng(result.data.ingredients)
            setTime(result.data.makingTime)
        })
        .catch(err => console.log(err))
    },[id])

  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
            <h2>Update Recipe</h2>
          <input type="text" placeholder="Enter Title" value={title}
          onChange={e => setTitle(e.target.value)}/>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            value={description}
            placeholder="Enter Description"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input type="text"  placeholder="Ingredients" value={ingredients}onChange={e => setIng(e.target.value)}/>
          <input type="text" placeholder="Making Time" value={makingTime} onChange={e => setTime(e.target.value)}/>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;