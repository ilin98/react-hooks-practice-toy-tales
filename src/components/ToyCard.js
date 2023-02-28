import React, { useState } from "react";

function ToyCard({name, image, likes, onHandleDelete, id}) {
  const [numberLikes, setNumberLikes] = useState(likes)

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(toy => onHandleDelete(toy))
  }

  function handleLikeClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: numberLikes + 1})
    })
    .then(resp => resp.json())
    .then(toy => addLikes())
  }

  function addLikes(){
    setNumberLikes(numberLikes + 1)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{numberLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
