import React from 'react';
import {Link} from 'react-router-dom';
function SideNavbar(){
    return(
        <div>
            <div className="bg-light border-right shadow-sm" id="sidebar-wrapper">
            <div className="sidebar-heading text-black-50"><Link to="/">Raport Online</Link></div>
                <div className="list-group list-group-flush">
                    <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/students" className="list-group-item list-group-item-action bg-light">Siswa</Link>
                    <Link to="#" className="list-group-item list-group-item-action bg-light">Overview</Link>
                    <Link to="#" className="list-group-item list-group-item-action bg-light">Events</Link>
                    <Link to="#" className="list-group-item list-group-item-action bg-light">Profile</Link>
                    <Link to="#" className="list-group-item list-group-item-action bg-light">Status</Link>
                </div>
            </div>
        </div>
    );
}

export default SideNavbar;