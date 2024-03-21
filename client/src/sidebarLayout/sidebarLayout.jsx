import React from 'react';
import { useAuth } from '../../../context/authContext'; // Adjust the path as needed
import { NavLink, Outlet } from 'react-router-dom';
import './sidebarLayout.css'; // Your sidebar CSS

const DynamicSidebar = () => {
    const { user } = useAuth();
    console.log("User in sidebar:", user);
    // if (!user) {
    //     // Return null or some placeholder if user is not defined
    //     // This prevents trying to access properties of null
    //     return null;
    // }

    const SidebarContent = () => (
        <ul className="menuItems">
            <li>
                <NavLink to={user.userType === 'provider' ? "/provider-home" : "/consumer-home"} className={({ isActive }) => isActive ? 'activeLink' : ''}>
                Home
                </NavLink>
            </li>
            {user.userType === 'provider' && (
                <>
                <li><NavLink to="/create-listing" className={({ isActive }) => isActive ? 'activeLink' : ''}>Create Listing</NavLink></li>
                <li><NavLink to="/view-listings" className={({ isActive }) => isActive ? 'activeLink' : ''}>Manage Listings</NavLink></li>
                </>
            )}
            {user.userType === 'consumer' && (
                <>
                <li><NavLink to="/browse-listings" className={({ isActive }) => isActive ? 'activeLink' : ''}>Browse Listings</NavLink></li>
                {/* Add more consumer-specific links as needed */}
                </>
            )}
        </ul>
    );

    return (
        <div className="layout">
        <div className="sidebar">
            <h3>Menu</h3>
            <SidebarContent />
        </div>
        <div className="content">
            <Outlet /> {/* Placeholder for the main content */}
        </div>
        </div>
    );
};

export default DynamicSidebar;
