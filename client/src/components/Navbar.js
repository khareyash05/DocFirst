import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">DocFirst&nbsp;<LocalHospitalIcon/></NavLink>
                <div class="container-fluid">
                <NavLink className="nav-link" to="/">Home</NavLink>
                    <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/myprofile">My Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
