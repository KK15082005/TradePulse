import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg "style={{ backgroundColor: "#050B14" }} >
            <div class="container ml-0">
                <Link class="navbar-brand"  to="/"><h2 style={{color:"#fff"}}>Trade<span style={{color:"#00E676"}}>Pulse</span></h2></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active text-white" aria-current="page" to="/SignUp">SignUp</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/About">About</Link>
                        </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white" to="/Product">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/Pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/Support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;