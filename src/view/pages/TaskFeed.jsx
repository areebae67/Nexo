import React, { useState } from 'react';
import { TASKS } from '../../model/data.js';
import TaskCard from '../components/TaskCard.jsx';

const TaskFeed = ({ setTask, setPage, onSave, saved }) => {
    const [filter, setFilter] = useState('All');
    const filtered = filter === 'All' ? TASKS : TASKS.filter(t => t.cat === filter);

    return (
        <div className="page section">
            <div className="between" style={{ marginBottom: 32 }}>
                <div>
                    <h2 className="s-title">Browse Tasks</h2>
                    <p className="s-sub">{filtered.length} tasks matching your preferences</p>
                </div>
                <div className="row">
                    <span style={{ fontSize: 13, color: '#aaa' }}>Sort by:</span>
                    <select className="fselect" style={{ width: 140, padding: '8px 12px' }}>
                        <option>Newest first</option>
                        <option>Highest budget</option>
                        <option>Closest</option>
                    </select>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginBottom: 32, overflowX: 'auto', paddingBottom: 8 }}>
                {['All', 'Cleaning', 'Repair', 'Delivery', 'Tutoring', 'Moving'].map(c => (
                    <div key={c} className={`chip${filter === c ? ' on' : ''}`} onClick={() => setFilter(c)}>{c}</div>
                ))}
            </div>

            <div className="grid3">
                {filtered.map(t => (
                    <TaskCard 
                        key={t.id} 
                        task={t} 
                        onView={task => { setTask(task); setPage('detail'); }} 
                        onSave={onSave} 
                        saved={saved} 
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskFeed;
