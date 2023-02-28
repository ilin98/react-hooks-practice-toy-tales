import React, { useState } from "react";

function ToyForm({addNewToy}) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0,
  })

  function onHandleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(newToy => {
      addNewToy(newToy)
      setNewToy({
        name: "",
        image: "",
        likes: "",
      })
    })
  }

  function handleChange(e) {
    setNewToy({
      ...newToy,
      [e.target.name]: [e.target.value],
  })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onHandleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
