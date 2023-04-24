import React from 'react';
import '../styles/Nav.css'

const styles = {
    navStyle: {
      justifyContent: 'flex-end',
    },
  };


// function Nav() {
//     return (
//       <nav style={styles.navStyle} className="navbar">
//         <ul>
//             <li className='navHover'><a href="#about">HOME</a></li>
//             <li className='navHover'><a href="#about">ABOUT</a></li>
//             <li className='navHover'><a href="#projects">PROJECTS</a></li>
//             <li className='navHover'><a href="#contact">CONTACT</a></li>
//             <li className='navHover'><a href="#resume">RESUME</a></li>
//         </ul>
//      </nav>
//     );
//   }

// export default Nav;

export default function Nav({ page, handlePage }) {
  
    return (
      <nav style={styles.navStyle} className="nav">
            <li>
              <li className={page === "home" ? "navHover" : ""}>
                <a
                  href="#home"
                  onClick={(e) => handlePage(e, "home")}
                  className="navHover"
                >
                    HOME
                </a>
              </li>
              <li className={page === "about" ? "navHover" : ""}>
                <a
                  href="#about"
                  onClick={(e) => handlePage(e, "about")}
                  className="navHover"
                >
                  ABOUT
                </a>
              </li>
              <li className={page === "projects" ? "navHover" : ""}>
                <a
                  href="#projects"
                  onClick={(e) => handlePage(e, "projects")}
                  className="navHover"
                >
                  PROJECTS
                </a>
              </li>
              <li className={page === "resume" ? "navHover" : ""}>
                <a
                  href="#resume"
                  onClick={(e) => handlePage(e, "resume")}
                  className="navHover"
                >
                  RESUME
                </a>
              </li>
              <li className={page === "contact" ? "navHover" : ""}>
                <a
                  href="#contact"
                  onClick={(e) => handlePage(e, "contact")}
                  className="navHover"
                >
                  CONTACT
                </a>
              </li>
            </li>
      </nav>
    );
  }


// alternative, does not like handlepagechange very well

// (
//     <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <a
//             href="#aboutme"
//             onClick={() => handlePageChange('About')}
//             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//           >
//             ABOUT ME
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#projects"
//             onClick={() => handlePageChange('Projetcs')}
//             className={currentPage === 'Projetcs' ? 'nav-link active' : 'nav-link'}
//           >
//             PROJECTS
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#resume"
//             onClick={() => handlePageChange('Resume')}
//             className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//           >
//             RESUME
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#contact"
//             onClick={() => handlePageChange('Contact')}
//             // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//           >
//             CONTACT
//           </a>
//         </li>
//       </ul>
//     );