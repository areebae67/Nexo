import React, { useState } from 'react';
import { TASKS, CATS } from '../../model/data.js';
import CategoryCard from '../components/CategoryCard.jsx';

const Home = ({ setPage, setTask }) => {
    const doubled = [...TASKS, ...TASKS];
    const [query, setQuery] = useState('');

    return (
        <div className="page">
            <div style={{ background: '#fff', padding: '88px 48px 72px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8FAF3', borderRadius: 32, padding: '6px 16px', marginBottom: 24 }}>
                    <span style={{ width: 7, height: 7, background: '#00A870', borderRadius: '50%', display: 'inline-block' }} />
                    <span style={{ fontSize: 12, color: '#00924a', fontWeight: 500, letterSpacing: 0.5 }}>Live in Karachi · Lahore · Islamabad</span>
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 56, color: '#1a1a2e', lineHeight: 1.1, marginBottom: 18, letterSpacing: '-1px' }}>
                    Get anything done,<br /><span style={{ color: '#00A870' }}>right nearby.</span>
                </h1>
                <p style={{ fontSize: 17, color: '#888', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.6 }}>
                    Post a task, match with verified locals, and track everything live.
                </p>
                <div style={{ display: 'flex', background: '#F7F8FA', border: '1.5px solid #e0e0e0', borderRadius: 40, overflow: 'hidden', maxWidth: 580, margin: '0 auto', padding: '6px 6px 6px 24px', alignItems: 'center', gap: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <span style={{ fontSize: 18 }}>🔍</span>
                    <input 
                        style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 15, outline: 'none', fontFamily: 'DM Sans, sans-serif', color: '#1a1a2e' }}
                        placeholder="What do you need done today?" 
                        value={query} 
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && setPage('feed')} 
                    />
                    <button className="btn btn-green" onClick={() => setPage('feed')}>Find Help</button>
                </div>
                <div style={{ marginTop: 24, display: 'flex', gap: 28, justifyContent: 'center', fontSize: 13, color: '#aaa' }}>
                    {['Verified providers', 'Real-time tracking', 'Secure payments', 'Instant match'].map(t => <span key={t}>✓ {t}</span>)}
                </div>
            </div>

            {/* Marquee */}
            <div style={{ background: '#FAFBFC', padding: '48px 0 40px', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                    <span style={{ fontSize: 12, color: '#aaa', fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase' }}>⚡ Live Tasks Near You — hover to pause</span>
                </div>
                <div className="marquee-wrap">
                    <div className="marquee-track">
                        {doubled.map((t, i) => (
                            <div key={i} style={{ width: 260, flexShrink: 0 }}>
                                <div className="card" style={{ transform: 'none' }} onClick={() => { setTask(t); setPage('detail'); }}>
                                    <div className="between" style={{ marginBottom: 8 }}>
                                        <span className="badge b-gray" style={{ fontSize: 11 }}>{t.cat}</span>
                                        {t.urgent && <span className="badge b-red" style={{ fontSize: 11 }}>⚡</span>}
                                    </div>
                                    <p style={{ fontWeight: 600, fontSize: 13, color: '#1a1a2e', marginBottom: 8, lineHeight: 1.4 }}>{t.title.slice(0, 42)}…</p>
                                    <div className="between">
                                        <span style={{ fontSize: 12, color: '#aaa' }}>📍 {t.dist} km</span>
                                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 17, color: '#00A870', fontWeight: 600 }}>PKR {t.budget.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="section" style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    <h2 className="s-title">Browse by Category</h2>
                    <p className="s-sub">Find the right help for every task</p>
                </div>
                <div className="grid4" style={{ maxWidth: 900, margin: '0 auto' }}>
                    {CATS.map(c => <CategoryCard key={c.name} cat={c} onClick={() => setPage('feed')} />)}
                </div>
            </div>

            {/* How it works */}
            <div className="section" style={{ background: '#F7F8FA', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <h2 className="s-title">How Nexo works</h2>
                    <p className="s-sub">Get help in 3 simple steps</p>
                </div>
                <div className="grid3" style={{ maxWidth: 800, margin: '0 auto' }}>
                    {[
                        { n: '01', title: 'Post your task', desc: 'Describe what you need, set your budget, and choose your location radius.', icon: '📝' },
                        { n: '02', title: 'Get matched instantly', desc: 'Verified providers near you see your task and apply within minutes.', icon: '⚡' },
                        { n: '03', title: 'Done & paid securely', desc: 'Track progress live, complete the job, and pay safely in-app.', icon: '✅' },
                    ].map(s => (
                        <div key={s.n} className="card-flat" style={{ textAlign: 'center', padding: 32 }}>
                            <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 13, color: '#00A870', marginBottom: 8 }}>{s.n}</div>
                            <h3 style={{ fontWeight: 600, fontSize: 16, marginBottom: 10, color: '#1a1a2e' }}>{s.title}</h3>
                            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
