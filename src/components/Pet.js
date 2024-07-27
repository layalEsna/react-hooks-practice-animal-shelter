// import React from "react";

// function Pet() {
//   return (
//     <div className="card" data-testid="pet">
//       <div className="content">
//         <span className="header">
//           {/*'♀' OR '♂' */}
//           PET NAME
//         </span>
//         <div className="meta">
//           <span className="date">PET TYPE</span>
//         </div>
//         <div className="description">
//           <p>Age: PET AGE</p>
//           <p>Weight: PET WEIGHT</p>
//         </div>
//       </div>
//       <div className="extra content">
//         <button className="ui disabled button">Already adopted</button>
//         <button className="ui primary button">Adopt pet</button>
//       </div>
//     </div>
//   );
// }

// export default Pet;
/////00000000

import React from "react";


function Pet({ pet, handleToggle, isToggled}) {
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
      { isToggled[pet.id] ? ( 
      <button className="ui disabled button" onClick={()=>handleToggle(pet.id)}>Already adopted</button>) :
       ( <button className="ui primary button" onClick={()=>handleToggle(pet.id)}>Adopt pet</button>)}
     
      </div>
    </div>
  );
}


export default Pet;