// import React, { useState } from "react";

// import Filters from "./Filters";
// import PetBrowser from "./PetBrowser";

// function App() {
//   const [pets, setPets] = useState([]);
//   const [filters, setFilters] = useState({ type: "all" });

//   return (
//     <div className="ui container">
//       <header>
//         <h1 className="ui dividing header">React Animal Shelter</h1>
//       </header>
//       <div className="ui container">
//         <div className="ui grid">
//           <div className="four wide column">
//             <Filters />
//           </div>
//           <div className="twelve wide column">
//             <PetBrowser />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
/////oooooooo

import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  //const [isAdopted, setIsAdopted] = useState({})
  const [isToggled, setIsToggled]= useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(data => {
      setPets(data)
      })
    .catch(e=>console.error(e))
  }, [])

  // function handleToggle(pId) {
  //   setIsAdopted(prev => ({
  //     ...prev, [pId]: !prev[pId]
  //   }))
  // }

  function onChangeType(e) {
    const {name, value} = e.target
  setFilters({[name]:value})
  }
  
const filteredPets = filters.type === 'all' ?pets : pets.filter(pet=> pet.type === filters.type)


function onFindPetsClick() {
   const url = filters.type === 'all' ? 'http://localhost:3001/pets' : `http://localhost:3001/pets?type=${filters.type}`
  fetch(url)
    .then(res => res.json())
    .then(data => setPets(data))
    .catch(e => console.error(e));
}

  function handleToggle(pId) {
    setIsToggled(prev => ({
    ...prev, [pId]:!prev[pId]
  }))
}

  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser
              pets={filteredPets}
              handleToggle={handleToggle}
              isToggled={isToggled}
              // isAdopted={isAdopted}
              // handleToggle={handleToggle}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;