import React from 'react';

const TaskDetail = ({ task, setPage, showToast }) => {
    if (!task) return null;

    return (
        <div className="page section" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <button 
                className="btn btn-ghost btn-sm" 
                style={{ marginBottom: 24 }} 
                onClick={() => setPage('feed')}
            >
                ← Back to Browse
            </button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40 }}>
                <div>
                    <div className="row" style={{ gap: 10, marginBottom: 16 }}>
                        <span className="badge b-green">{task.cat}</span>
                        {task.urgent && <span className="badge b-red">⚡ Urgent</span>}
                    </div>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, color: '#1a1a2e', marginBottom: 12, textAlign: 'left' }}>
                        {task.title}
                    </h1>
                    <div className="row" style={{ color: '#aaa', fontSize: 14, marginBottom: 32 }}>
                        <span>📍 {task.dist} km away in DHA Phase 6</span>
                        <span>•</span>
                        <span>Posted 2 hours ago</span>
                    </div>

                    <div className="card-flat" style={{ marginBottom: 32 }}>
                        <h3 style={{ fontSize: 16, marginBottom: 12 }}>Description</h3>
                        <p style={{ color: '#666', lineHeight: 1.7, fontSize: 15 }}>{task.desc}</p>
                    </div>

                    <h3 style={{ fontSize: 16, marginBottom: 16 }}>Location</h3>
                    <div className="map-ph">
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: 24 }}>📍</span>
                            <div style={{ fontSize: 13, color: '#00A870', fontWeight: 600, marginTop: 8 }}>Task Location pinned</div>
                            <div style={{ fontSize: 12, color: '#aaa' }}>Precise location shown after match</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="sidebar-card">
                        <div style={{ fontSize: 13, color: '#aaa', marginBottom: 4 }}>Budget Range</div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: '#00A870', fontWeight: 700, marginBottom: 20 }}>
                            PKR {task.budget.toLocaleString()}
                        </div>
                        <div className="div" />
                        <div style={{ fontSize: 13, color: '#aaa', marginBottom: 12 }}>Posted By</div>
                        <div className="row" style={{ marginBottom: 20 }}>
                            <div className="av" style={{ width: 44, height: 44, fontSize: 16 }}>{task.poster.av}</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 15 }}>{task.poster.name}</div>
                                <div className="stars" style={{ fontSize: 13 }}>★ {task.poster.rating} <span style={{ color: '#aaa', fontWeight: 400 }}>({task.poster.reviews} reviews)</span></div>
                            </div>
                        </div>
                        <button className="btn btn-green btn-full" style={{ padding: '14px' }} onClick={() => showToast('Application sent to ' + task.poster.name)}>Apply for this Task</button>
                        <button className="btn btn-ghost btn-full" style={{ marginTop: 12, padding: '14px' }}>Message Poster</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;
