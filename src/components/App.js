import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(toys => setToyList(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy){
    setToyList([...toyList, newToy])
  }


  function handleDelete(toy) {
    const updatedToyList = toyList.filter(toys => toys.id !== toy.id)
    setToyList(updatedToyList)
  }



  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onHandleDelete={handleDelete} toyList={toyList} />
    </>
  );
}

export default App;
