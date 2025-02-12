import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Sidebar Toggle Button - Hidden when sidebar is open */}
            {!isOpen && (
                <button className="sidebar-toggle" onClick={() => setIsOpen(true)}>
                    ☰
                </button>
            )}

            {/* Sidebar Panel */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                <h2>Navigation</h2>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Leaderboard</Link></li>
                        <li><Link to="/game/add" onClick={() => setIsOpen(false)}>Add Game</Link></li>
                        <li><Link to="/login" onClick={() => setIsOpen(false)}>Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
