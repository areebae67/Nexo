import React from 'react';

const CategoryCard = ({ cat, onClick }) => {
    return (
        <div className="cat-card" onClick={onClick}>
            <div className="cat-icon" style={{ background: cat.color }}>{cat.emoji}</div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#1a1a2e', marginBottom: 4 }}>{cat.name}</div>
            <div style={{ fontSize: 12, color: '#aaa' }}>{cat.count} tasks nearby</div>
        </div>
    );
};

export default CategoryCard;
