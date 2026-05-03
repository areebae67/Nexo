import React, { useState, useCallback } from 'react';
import Navbar from '../view/components/Navbar.jsx';
import Home from '../view/pages/Home.jsx';
import TaskFeed from '../view/pages/TaskFeed.jsx';
import TaskDetail from '../view/pages/TaskDetail.jsx';
import PostTask from '../view/pages/PostTask.jsx';
import Profile from '../view/pages/Profile.jsx';
import AdminDashboard from '../view/pages/AdminDashboard.jsx';
import Login from '../view/pages/Login.jsx';

const AppController = () => {
    const [page, setPage] = useState('home');
    const [activeTask, setActiveTask] = useState(null);
    const [saved, setSaved] = useState([]);
    const [toast, setToast] = useState(null);

    const showToast = useCallback((msg, icon = "✓") => {
        setToast({ msg, icon, id: Date.now() });
        setTimeout(() => setToast(null), 2800);
    }, []);

    const toggleSave = useCallback((id) => {
        setSaved(prev => {
            const isSaved = prev.includes(id);
            if (isSaved) {
                showToast('Removed from saved', '🗑️');
                return prev.filter(x => x !== id);
            } else {
                showToast('Added to saved', '🔖');
                return [...prev, id];
            }
        });
    }, [showToast]);

    const renderPage = () => {
        switch (page) {
            case 'home': return <Home setPage={setPage} setTask={setActiveTask} />;
            case 'feed': return <TaskFeed setTask={setActiveTask} setPage={setPage} onSave={toggleSave} saved={saved} />;
            case 'detail': return <TaskDetail task={activeTask} setPage={setPage} showToast={showToast} />;
            case 'post': return <PostTask setPage={setPage} showToast={showToast} />;
            case 'profile': return <Profile showToast={showToast} />;
            case 'admin': return <AdminDashboard />;
            case 'login': return <Login setPage={setPage} showToast={showToast} />;
            case 'saved': return (
                <div className="page section">
                    <h2 className="s-title">Saved Tasks</h2>
                    <p className="s-sub" style={{ marginBottom: 32 }}>Your bookmarked opportunities</p>
                    {saved.length === 0 ? (
                        <div className="card-flat" style={{ textAlign: 'center', padding: '60px' }}>
                            <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>🔖</span>
                            <p style={{ color: '#aaa' }}>You haven't saved any tasks yet.</p>
                        </div>
                    ) : (
                        <TaskFeed setTask={setActiveTask} setPage={setPage} onSave={toggleSave} saved={saved} />
                    )}
                </div>
            );
            default: return <Home setPage={setPage} setTask={setActiveTask} />;
        }
    };

    return (
        <div className="app-container">
            <Navbar page={page} setPage={setPage} saved={saved} />
            
            <main>
                {renderPage()}
            </main>

            {toast && (
                <div className="toast">
                    <span style={{ fontSize: 16 }}>{toast.icon}</span>
                    {toast.msg}
                </div>
            )}
        </div>
    );
};

export default AppController;
