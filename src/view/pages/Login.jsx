import React, { useState } from 'react';

const Login = ({ setPage, showToast }) => {
    const [mode, setMode] = useState('login');

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast(mode === 'login' ? 'Welcome back!' : 'Account created!');
        setPage('home');
    };

    return (
        <div className="auth-wrap">
            <div className="auth-card">
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <div className="logo" style={{ fontSize: 32, marginBottom: 8 }}>Nexo<span>.</span></div>
                    <p style={{ fontSize: 14, color: '#aaa' }}>
                        {mode === 'login' ? 'Sign in to your account' : 'Join the hyperlocal marketplace'}
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    {mode === 'signup' && (
                        <div className="fg">
                            <label className="flabel">Full Name</label>
                            <input className="finput" placeholder="Enter your name" required />
                        </div>
                    )}
                    <div className="fg">
                        <label className="flabel">Email Address</label>
                        <input className="finput" type="email" placeholder="name@email.com" required />
                    </div>
                    <div className="fg">
                        <label className="flabel">Password</label>
                        <input className="finput" type="password" placeholder="••••••••" required />
                    </div>

                    {mode === 'login' && (
                        <div style={{ textAlign: 'right', marginBottom: 20 }}>
                            <span style={{ fontSize: 13, color: '#00A870', fontWeight: 500, cursor: 'pointer' }}>Forgot Password?</span>
                        </div>
                    )}

                    <button className="btn btn-green btn-full" style={{ padding: '14px' }}>
                        {mode === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="div" style={{ margin: '24px 0' }} />

                <div style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>
                    {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <span 
                        style={{ color: '#00A870', fontWeight: 600, cursor: 'pointer' }}
                        onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    >
                        {mode === 'login' ? 'Sign Up' : 'Log In'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
