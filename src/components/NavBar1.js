// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
    return (
        <div>
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapibleMenu">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="#" class="navbar-brand">Online Inventory</a>
                    </div>
                    <div class="collapse navbar-collapse" id="collapibleMenu">
                        <ul class="nav navbar-nav navbar-left">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/create">Create Inventory</Link></li>
                            <li><Link to="/">Inventories</Link></li>
                            <li><a href="#">Support</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar1;
