import React from 'react';

const TaskCard = ({ task, onView, onSave, saved }) => {
    const isSaved = saved && saved.includes(task.id);
    
    return (
        <div className="card task-card-wrap" onClick={() => onView && onView(task)}>
            <div className="between" style={{ marginBottom: 12 }}>
                <div className="row" style={{ gap: 8 }}>
                    <span className="badge b-gray">{task.cat}</span>
                    {task.urgent && <span className="badge b-red">⚡ Urgent</span>}
                </div>
                <button 
                    style={{ 
                        width: 34, 
                        height: 34, 
                        fontSize: 15, 
                        border: 'none', 
                        background: 'transparent', 
                        cursor: 'pointer', 
                        opacity: isSaved ? 1 : 0.35, 
                        transition: 'opacity 0.2s' 
                    }}
                    onClick={e => { e.stopPropagation(); onSave && onSave(task.id); }}
                >
                    🔖
                </button>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e', marginBottom: 8, lineHeight: 1.4 }}>{task.title}</h3>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.55, marginBottom: 14 }}>{task.desc.slice(0, 85)}…</p>
            <div className="between">
                <div style={{ display: 'flex', gap: 14, fontSize: 12, color: '#aaa' }}>
                    <span>📍 {task.dist} km</span>
                    <span>⏰ {task.deadline}</span>
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#00A870', fontWeight: 600 }}>
                    PKR {task.budget.toLocaleString()}
                </div>
            </div>
            <div className="div" style={{ margin: '14px 0' }} />
            <div className="between">
                <div className="row">
                    <div className="av" style={{ width: 30, height: 30, fontSize: 11 }}>{task.poster.av}</div>
                    <span style={{ fontSize: 13, color: '#666', fontWeight: 500 }}>{task.poster.name}</span>
                    <span className="stars" style={{ fontSize: 12 }}>★ {task.poster.rating}</span>
                </div>
                <button className="btn btn-green btn-sm" onClick={e => { e.stopPropagation(); onView && onView(task); }}>View →</button>
            </div>
        </div>
    );
};

export default TaskCard;
