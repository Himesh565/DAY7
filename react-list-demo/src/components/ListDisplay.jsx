import React from 'react';
import ListItem from './ListItem';

/**
 * ListDisplay Component
 * 
 * Purpose: Demonstrates proper list rendering in React
 * 
 * KEY CONCEPTS FOR DAY-7 (Lists & Keys):
 * 
 * 1. RENDERING ARRAYS WITH .map()
 *    - Array.map() transforms each item into JSX
 *    - Returns a new array of React elements
 * 
 * 2. UNIQUE KEYS
 *    - Each element needs a unique "key" prop
 *    - Keys help React identify which items changed, added, or removed
 *    - We use item.id (unique identifier) NOT array index
 * 
 * 3. WHY NOT USE INDEX AS KEY?
 *    - Index can change when items are added/removed
 *    - Can cause bugs with component state and re-renders
 *    - Only use index if: list is static, items have no IDs, list never reordered
 * 
 * 4. WHAT HAPPENS WITHOUT KEYS?
 *    - React shows warning in console
 *    - Performance issues with large lists
 *    - Potential bugs with dynamic updates
 */
function ListDisplay({ items, onDeleteItem }) {
  // Check if list is empty
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>🎯 No goals yet! Add your first goal above.</p>
      </div>
    );
  }

  return (
    <ul className="list-display">
      {/* 
        ⭐ CRITICAL: Using .map() to render array of items
        
        Syntax: array.map((item) => <Component key={unique-id} />)
        
        - items.map() iterates through each item
        - Returns ListItem component for each item
        - key={item.id} provides unique identifier
        - Using item.id (NOT index) ensures proper React reconciliation
      */}
      {items.map((item) => (
        <ListItem
          key={item.id}           // ⭐ UNIQUE KEY - Critical for React performance
          item={item}             // Pass entire item object
          onDelete={onDeleteItem} // Pass delete handler
        />
      ))}
    </ul>
  );
}

export default ListDisplay;
