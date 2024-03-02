import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header-main">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    Navbar
                </a>
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
                            <a class="nav-link" href="#">
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Rent Bike
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 mr-2 my-sm-0">
                            Sign In
                        </button>
                        <button class="btn btn-outline-success my-2 my-sm-0">
                            Sign up
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
