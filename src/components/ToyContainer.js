import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, onHandleDelete}) {

  const displayedToys = toyList.map(toy => {
    return <ToyCard id={toy.id} key={toy.id} onHandleDelete={onHandleDelete} name={toy.name} image={toy.image} likes={toy.likes} />
  })

  return (
    <div id="toy-collection">
      {displayedToys}
    </div>
  );
}

export default ToyContainer;
