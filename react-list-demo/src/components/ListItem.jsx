import React from 'react';

/**
 * ListItem Component
 * 
 * Purpose: Demonstrates how individual list items should be structured
 * 
 * Key Concepts:
 * - Each item receives unique data via props
 * - Handles delete action for specific item
 * - Shows proper component composition
 */
function ListItem({ item, onDelete }) {
  return (
    <li className="list-item">
      <div className="item-content">
        <span className="item-id">#{item.id}</span>
        <span className="item-text">{item.text}</span>
      </div>
      
      {/* 
        Delete Button: 
        - Calls onDelete with specific item ID
        - Demonstrates how to remove items from list
      */}
      <button 
        className="delete-btn" 
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.text}`}
      >
        ✕
      </button>
    </li>
  );
}

export default ListItem;
