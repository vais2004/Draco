 
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return(

<header>
<nav className="navbar navbar-expand-lg  bg-primary link-light">
  <div className="container-fluid py-1">
    <a className="navbar-brand link-light ps-3 fs-4" href="/">Intern House</a>
    <button className="navbar-toggler btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ps-3">
          <a className="nav-link active link-light" aria-current="page" href="/">Job Postings</a>
        </li>
        <li className="nav-item ps-3">
          <a className="nav-link link-light" href="/postajob">Post a Job</a>
        </li>  
      </ul>
     
    </div>
  </div>
</nav>
</header>
  )
}

export default Header;

//     <header className="navbar navbar-expand-lg navbar-light bg-primary text-light">
//     <div className="container">
//       <Link to="/" className="navbar-brand">
//      Intern House
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
   
//         <div className="navbar-nav ms-auto">
//           <div className="btn-group" role="group">

//             <Link to="/" className="nav-link px-3">
//               Job Postings
//             </Link>
          
//             <Link to="/" className="nav-link px-3">
//               Post a Job
//             </Link>
          
//           </div>
          
//         </div>
//       </div>
//     </div>
//   </header>