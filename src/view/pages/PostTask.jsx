import React, { useState } from 'react';

const PostTask = ({ setPage, showToast }) => {
    const [step, setStep] = useState(1);

    const next = () => {
        if (step < 3) setStep(step + 1);
        else {
            showToast('Task posted successfully!');
            setPage('feed');
        }
    };

    return (
        <div className="page section" style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h2 className="s-title">Post a New Task</h2>
                <p className="s-sub">Describe what you need help with</p>
            </div>

            <div style={{ marginBottom: 40 }}>
                <div className="between" style={{ marginBottom: 10, fontSize: 13, fontWeight: 600 }}>
                    <span style={{ color: '#00A870' }}>Step {step} of 3</span>
                    <span style={{ color: '#aaa' }}>{step === 1 ? 'Details' : step === 2 ? 'Location' : 'Budget'}</span>
                </div>
                <div className="prog-bar"><div className="prog-fill" style={{ width: `${(step / 3) * 100}%` }} /></div>
            </div>

            <div className="card-flat">
                {step === 1 && (
                    <div>
                        <div className="fg">
                            <label className="flabel">Task Title</label>
                            <input className="finput" placeholder="e.g. Help moving heavy sofa" />
                        </div>
                        <div className="fg">
                            <label className="flabel">Category</label>
                            <select className="fselect">
                                <option>Select a category</option>
                                <option>Cleaning</option>
                                <option>Repair</option>
                                <option>Moving</option>
                                <option>Delivery</option>
                            </select>
                        </div>
                        <div className="fg">
                            <label className="flabel">Task Description</label>
                            <textarea className="ftextarea" placeholder="Be as detailed as possible..." />
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className="fg">
                            <label className="flabel">Area / Neighborhood</label>
                            <input className="finput" placeholder="e.g. DHA Phase 5, Karachi" />
                        </div>
                        <div className="fg">
                            <label className="flabel">Search Radius (km)</label>
                            <input type="range" min="1" max="20" defaultValue="5" />
                            <div className="between" style={{ marginTop: 8, fontSize: 12, color: '#aaa' }}>
                                <span>1km</span>
                                <span>20km</span>
                            </div>
                        </div>
                        <div className="map-ph" style={{ height: 180, marginTop: 10 }}>
                            <span style={{ fontSize: 13, color: '#aaa' }}>Map preview will appear here</span>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <div className="fg">
                            <label className="flabel">Estimated Budget (PKR)</label>
                            <input className="finput" type="number" placeholder="5000" />
                        </div>
                        <div className="fg">
                            <label className="flabel">Expected Deadline</label>
                            <input className="finput" type="date" />
                        </div>
                        <div className="card" style={{ background: '#f0fdf8', borderColor: '#c8f0e2', padding: 16 }}>
                            <div className="row">
                                <span style={{ fontSize: 20 }}>💡</span>
                                <p style={{ fontSize: 13, color: '#00924a', lineHeight: 1.5 }}>
                                    Tasks with realistic budgets get 3x faster applications from top-rated providers.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="between" style={{ marginTop: 32 }}>
                    <button className="btn btn-ghost" style={{ visibility: step === 1 ? 'hidden' : 'visible' }} onClick={() => setStep(step - 1)}>Back</button>
                    <button className="btn btn-green" onClick={next}>{step === 3 ? 'Post Task Now' : 'Continue'}</button>
                </div>
            </div>
        </div>
    );
};

export default PostTask;
