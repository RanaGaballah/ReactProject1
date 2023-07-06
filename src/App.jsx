import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { Header, Footer } from "./sections/index";
import { Container } from "./component/index";
import {Home,Profile,Streams,Browse, Details} from './Pages/index'


function App() {
  return (
    <>
      <Router>
        <Header />
         <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/streams" element={<Streams/>}/>
              <Route path="/browse" element={<Browse/>}/>
              <Route path="/details" element={<Details/>}/>
            </Routes>
         </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
