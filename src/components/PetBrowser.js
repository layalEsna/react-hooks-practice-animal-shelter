// import React from "react";

// import Pet from "./Pet";

// function PetBrowser() {
//   return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
// }

// export default PetBrowser;
/////0000000

import React from "react";

import Pet from "./Pet";



function PetBrowser({pets, handleToggle, isToggled}) {
  return (
    <div>
    <div className="ui cards">
      {pets.map(pet => (
        <Pet
          key={pet.id}
          pet={pet}
          handleToggle={handleToggle}
              isToggled={isToggled}
          // isAdopted={isAdopted}
          // handleToggle={handleToggle}
        />
      ))}
      </div>
      </div>
)}

export default PetBrowser;