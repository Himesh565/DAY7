import { useState } from 'react';
import './App.css';
import ListInput from './components/ListInput';
import ListDisplay from './components/ListDisplay';

/**
 * App Component - Company Goals Manager
 * 
 * A React application demonstrating:
 * ✅ Rendering arrays using .map()
 * ✅ Using unique keys for list elements
 * ✅ Dynamic list updates (add/delete)
 * ✅ State management with useState
 * ✅ Component composition
 * 
 * ARCHITECTURE:
 * - App.jsx: Manages state and business logic
 * - ListInput: Handles user input
 * - ListDisplay: Renders list using .map()
 * - ListItem: Individual item component
 */
function App() {
  /**
   * STATE MANAGEMENT
   * 
   * useState Hook: Manages the list of items
   * - items: array of objects with {id, text}
   * - setItems: function to update the state
   * 
   * Initial state includes sample items to demonstrate rendering
   */
  const [items, setItems] = useState([
    { id: 4, text: 'Achieve $5M revenue target' },
    { id: 3, text: 'Expand team to 50 members' },
    { id: 2, text: 'Launch new product line in Q2' },
    { id: 1, text: 'Increase customer satisfaction by 25%' },
  ]);

  // Track the next ID to use for new items
  const [nextId, setNextId] = useState(5);

  /**
   * ADD ITEM FUNCTION
   * 
   * Purpose: Adds new item to the list
   * 
   * Key Concepts:
   * 1. Generate unique ID using sequential counter
   *    - Ensures each item has unique identifier
   *    - Critical for proper key prop
   * 
   * 2. Use spread operator to create new array
   *    - React requires immutable state updates
   *    - [...items, newItem] creates new array with all items
   * 
   * 3. Automatic re-render
   *    - setItems() triggers React to re-render
   *    - ListDisplay.map() runs again with updated array
   */
  const addItem = (text) => {
    const newItem = {
      id: nextId, // Simple sequential ID: 5, 6, 7...
      text: text,
    };
    
    // Add new item to beginning of array (could also use push to end)
    setItems([newItem, ...items]);
    
    // Increment the ID counter for next item
    setNextId(nextId + 1);
  };

  /**
   * DELETE ITEM FUNCTION
   * 
   * Purpose: Removes item from list by ID
   * 
   * Key Concepts:
   * 1. Use .filter() to create new array without deleted item
   *    - filter() returns new array (immutable update)
   *    - Keeps all items where item.id !== deleteId
   * 
   * 2. React automatically re-renders
   *    - Keys help React identify which item was removed
   *    - Only deleted item is removed from DOM
   *    - Other items remain unchanged (efficient!)
   */
  const deleteItem = (deleteId) => {
    // Filter out item with matching ID
    const updatedItems = items.filter((item) => item.id !== deleteId);
    setItems(updatedItems);
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="app-header">
        <h1>🎯 Company Goals Manager</h1>
        <p className="subtitle">Manage Your Team's Objectives & Milestones</p>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Info Panel */}
        <div className="info-panel">
          <h2>✨ Features:</h2>
          <ul className="learning-points">
            <li>✓ Add new goals and objectives</li>
            <li>✓ Remove completed tasks</li>
            <li>✓ Real-time list updates</li>
            <li>✓ Track total goal count</li>
            <li>✓ Efficient rendering with unique keys</li>
          </ul>
        </div>

        {/* List Management Section */}
        <div className="list-container">
          <h2>Your Goals</h2>
          
          {/* Input Component: Handles adding items */}
          <ListInput onAddItem={addItem} />
          
          {/* Display Component: Renders list using .map() with keys */}
          <ListDisplay items={items} onDeleteItem={deleteItem} />
          
          {/* Stats */}
          <div className="stats">
            <p>Total Goals: <strong>{items.length}</strong></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>💼 Built with React - Demonstrating List Rendering & Keys</p>
      </footer>
    </div>
  );
}

export default App;
