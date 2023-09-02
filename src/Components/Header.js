// import React from 'react'
// import './Header.css';
// import { BiCartAlt, BiUser } from "react-icons/bi";
// import IconCta from "../Components/IconCta";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   return (
//     <div id="application-header" className="application-header">
//          <div id="branding" className="branding">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU78GoylB0aFLUEV1cage0ZKregSTs8QPWnn2GzKFdjm86I_Adm8FmVL6F-_YU2eUe9uE&usqp=CAU" alt="pandhi logo" />
//         <p>Pandhi</p>
//       </div>
//       <div id="nav-options" className="branding">
//       <IconCta Icon={BiCartAlt} onClick={() => navigate("/cart")} />
//         <IconCta Icon={BiUser }onClick={() => navigate("/login")} />
//       </div>

//         </div>
//   )
// }

// export default Header
import React from 'react';
import './Header.css';
import { BiUser } from "react-icons/bi";
import IconCta from "../Components/IconCta";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="application-header" className="application-header">
      <div id="branding" className="branding">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYNPCNAXesCW02pEdUsLeGtv14YsP1_HAEtVYTNrKlN_1YB9Mr2XZv9Ue9-a_FQyqqRc&usqp=CAU" alt="pandhi logo" className="logo" />
        <p className="brand-name">White Castle</p>
      </div>
      <div id="nav-options" className="nav-options">
        <IconCta Icon={BiUser} onClick={() => navigate("/")} className="icon" />
      </div>
    </div>
  );
}

export default Header;



