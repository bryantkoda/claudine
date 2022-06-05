import React from "react";
import logo from "../Images/logo.png";


const Navbar = () => {
    return(
        <>
        <header>
        <h1 className="text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h1>
    <p className="text-white">Stet clita kasd gubergren,no sea takimata sanctus</p>
    <p className="lead">
      <a href="#" className="btn btn-primary btn-sm fw-bold">FIND OUT MORE</a>
    </p>
        </header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="200"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse"> 
                    <div className="d-flex justify-content-end">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active px-0" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar