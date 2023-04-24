import React, {useState} from "react";
import Nav from './components/Nav'
import Home from './components/Home'
// import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'


export default function App() {
    const [page, setPage] = useState("home");
  
    function pickPage() {
      switch (page) {
        case "home":
          return <Home />;
        case "about":
          return <About />;
        case "projects":
          return <Projects />;
        case "Resume":
          return <Resume />;
        case "Contact":
          return <Contact />;
        default:
          return <h1>404</h1>;
      }
    }
  
    function handlePage(e, page) {
      e.preventDefault();
      console.log(page);
      setPage(page);
    }
  
    return (
      <>
        <Nav handlePage={handlePage} />
        <div>{pickPage()}</div>
      </>
    );
};










// export default function App() {
//     const [currentPage, setCurrentPage] = useState('About');
  
//     // function pickLink() {
//     //     if (currentPage === 'About') {
//     //         return <About />;
//     //       }
//     //       if (currentPage === 'Projects') {
//     //         return <Projects />;
//     //       }
//         //   if (currentPage === 'Resume') {
//         //     return <Resume />;
//         //   }
//         //   if (currentPage === 'Contact') {
//         //     return <Contact />;
//         //   }
//     // };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//     <>
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* <div> {pickLink()} </div> */}
//       <Home />
      
//       {/* <Footer /> */}
//     </>
//   );
// };
