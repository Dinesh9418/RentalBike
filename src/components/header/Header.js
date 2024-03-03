import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header-main">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Navbar</Link>
                
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/bikerent">
                                Rent Bike
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-primary my-2 mr-2 my-sm-0">
                            Sign In
                        </button>
                        <button class="btn btn-outline-primary my-2 my-sm-0">
                            Sign up
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
