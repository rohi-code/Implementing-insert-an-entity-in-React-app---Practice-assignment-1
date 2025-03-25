
import React from "react";
import { useState } from "react";

function Addbook() {
    const [title, setTitle] = useState("");
    const [author, setauthor] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({title,author,description,coverImage});
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value) } />
            
            <label htmlFor="author">Author</label>
            <input type="text" value={author} onChange={(e)=> setauthor(e.target.author) } />

            <label htmlFor="description">Description</label>
            <input type="textarea"  value={description} onChange={(e) => setDescription(e.target.description) } />

            <label htmlFor="coverImage">CoverImage</label>
            <input type="file" value={coverImage} onChange={(e) => setCoverImage(e.target.coverImage) } />

            <button type="submit">Submit</button>
            
        </form>
    </div>
    
  )
}

export default Addbook
