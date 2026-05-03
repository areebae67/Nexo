import React from 'react';

const AdminDashboard = () => {
    const stats = [
        { label: 'Active Tasks', val: '142', change: '+12%', icon: '📋', color: '#E8F0FE' },
        { label: 'Verified Providers', val: '1,054', change: '+5%', icon: '🛡️', color: '#E8FAF3' },
        { label: 'Transactions', val: 'PKR 4.2M', change: '+18%', icon: '💰', color: '#FEF3E2' },
        { label: 'Support Tickets', val: '8', change: '-2', icon: '🎫', color: '#FCE8F0' },
    ];

    return (
        <div className="page section">
            <div className="between" style={{ marginBottom: 32 }}>
                <div>
                    <h2 className="s-title">Admin Dashboard</h2>
                    <p className="s-sub">Platform overview and management</p>
                </div>
                <button className="btn btn-dark">Download Report</button>
            </div>

            <div className="grid4" style={{ marginBottom: 40 }}>
                {stats.map(s => (
                    <div key={s.label} className="card-flat">
                        <div className="between" style={{ marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{s.icon}</div>
                            <span style={{ fontSize: 12, color: s.change.startsWith('+') ? '#00A870' : '#ef4444', fontWeight: 600 }}>{s.change}</span>
                        </div>
                        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{s.val}</div>
                        <div style={{ fontSize: 13, color: '#aaa' }}>{s.label}</div>
                    </div>
                ))}
            </div>

            <div className="card-flat">
                <div className="between" style={{ marginBottom: 20 }}>
                    <h3 style={{ fontSize: 16 }}>Recent Activity</h3>
                    <span style={{ fontSize: 13, color: '#00A870', fontWeight: 500, cursor: 'pointer' }}>View All</span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #f0f0f0' }}>
                            <th style={{ padding: '12px 0', color: '#aaa', fontWeight: 500 }}>User</th>
                            <th style={{ padding: '12px 0', color: '#aaa', fontWeight: 500 }}>Action</th>
                            <th style={{ padding: '12px 0', color: '#aaa', fontWeight: 500 }}>Status</th>
                            <th style={{ padding: '12px 0', color: '#aaa', fontWeight: 500 }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { u: 'Farooq A.', a: 'Completed Plumbing Task', s: 'Success', d: '2 mins ago' },
                            { u: 'Zainab M.', a: 'Posted new Task', s: 'Pending', d: '15 mins ago' },
                            { u: 'Ali Raza', a: 'Verified Profile', s: 'Success', d: '1 hour ago' },
                            { u: 'Sana K.', a: 'Dispute opened', s: 'Review', d: '3 hours ago' },
                        ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={{ padding: '16px 0', fontWeight: 500 }}>{row.u}</td>
                                <td style={{ padding: '16px 0', color: '#666' }}>{row.a}</td>
                                <td style={{ padding: '16px 0' }}>
                                    <span className={`badge ${row.s === 'Success' ? 'b-green' : row.s === 'Pending' ? 'b-amber' : 'b-red'}`}>{row.s}</span>
                                </td>
                                <td style={{ padding: '16px 0', color: '#aaa' }}>{row.d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
