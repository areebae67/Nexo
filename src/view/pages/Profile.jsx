import React from 'react';
import { USERS, REVIEWS } from '../../model/data.js';

const Profile = ({ showToast }) => {
    const user = USERS[0]; // Dummy active user

    return (
        <div className="page section" style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 40 }}>
                <div>
                    <div className="card-flat" style={{ textAlign: 'center', padding: '40px 24px' }}>
                        <div className="av" style={{ width: 100, height: 100, fontSize: 36, margin: '0 auto 20px' }}>{user.av}</div>
                        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{user.name}</h2>
                        <div className="stars" style={{ fontSize: 15, marginBottom: 20 }}>★ {user.rating} <span style={{ color: '#aaa', fontWeight: 400 }}>({user.reviews} reviews)</span></div>
                        <div className="between" style={{ background: '#F7F8FA', borderRadius: 12, padding: '12px 16px', marginBottom: 24 }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 700, fontSize: 16 }}>{user.completed}</div>
                                <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase' }}>Done</div>
                            </div>
                            <div style={{ width: 1, height: 24, background: '#e0e0e0' }} />
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 700, fontSize: 16 }}>{user.earnings}</div>
                                <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase' }}>Earned</div>
                            </div>
                        </div>
                        <button className="btn btn-dark btn-full" onClick={() => showToast('Profile updated')}>Edit Profile</button>
                    </div>

                    <div className="card-flat" style={{ marginTop: 20 }}>
                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Skills</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {user.skills.map(s => <span key={s} className="tag">{s}</span>)}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="between" style={{ marginBottom: 24 }}>
                        <h2 className="s-title">About Me</h2>
                        <span className="badge b-gray">Member since {user.since}</span>
                    </div>
                    <p style={{ color: '#666', lineHeight: 1.7, fontSize: 15, marginBottom: 40 }}>{user.bio}</p>

                    <h2 className="s-title" style={{ marginBottom: 24 }}>Recent Reviews</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {REVIEWS.map((r, i) => (
                            <div key={i} className="card-flat">
                                <div className="between" style={{ marginBottom: 12 }}>
                                    <div className="row">
                                        <div className="av" style={{ width: 32, height: 32, fontSize: 12 }}>{r.av}</div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                                            <div className="stars" style={{ fontSize: 11 }}>{'★'.repeat(r.r)}{'☆'.repeat(5 - r.r)}</div>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: 12, color: '#aaa' }}>{r.date}</span>
                                </div>
                                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.5, marginBottom: 10 }}>"{r.text}"</p>
                                <div style={{ fontSize: 12, color: '#00A870', fontWeight: 500 }}>Task: {r.task}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
