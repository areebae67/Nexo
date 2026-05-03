import React from 'react';

const Navbar = ({ page, setPage, saved }) => {
    return (
        <nav className="nav">
            <div className="logo" onClick={() => setPage('home')}>Nexo<span>.</span></div>
            <div className="nav-links">
                <span className={`nav-link${page === 'feed' ? ' act' : ''}`} onClick={() => setPage('feed')}>Browse Tasks</span>
                <span className={`nav-link${page === 'post' ? ' act' : ''}`} onClick={() => setPage('post')}>Post a Task</span>
                <span className={`nav-link${page === 'profile' ? ' act' : ''}`} onClick={() => setPage('profile')}>Profile</span>
                <span className={`nav-link${page === 'admin' ? ' act' : ''}`} onClick={() => setPage('admin')}>Admin</span>
                <div style={{ position: 'relative', display: 'inline-block' }} onClick={() => setPage('saved')}>
                    <button className="btn-icon">🔖</button>
                    {saved && saved.length > 0 && <div className="notif-dot" />}
                </div>
                <button className="btn btn-green" onClick={() => setPage('login')}>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
