import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"

import "./Styles/Variables.css";
import "./Styles/Custom.css";
import "./Styles/Responsive.css";

import Navbar from "./Components/Navbar";
import Content1 from "./Components/Content1";
import Footer from "./Components/Footer";
import TeamList from "./Components/TeamList";
import Content2 from "./Components/Content2";
import Gallery from "./Components/Gallery";
import Bars from "./Components/Bars";


function App() {
  return(
    <>
      <Navbar/>
      <Content1/>
      <Bars/>
      <Content2/>
      <Gallery/>
      <TeamList/>
      <Footer/>
    </>
  );
}

  export default App