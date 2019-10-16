import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-main">
            <a href="#">Home</a>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Service
       </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">For Entrepreneurs</a>
                    <a class="dropdown-item" href="#">For Students</a>
                    <a class="dropdown-item" href="#">For hobbyists</a>
                </div>
            </div>
            <a href="#">Contact</a>
        </div>
    )
}
export default NavBar