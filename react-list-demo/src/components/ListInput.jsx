import React, { useState } from 'react';

/**
 * ListInput Component
 * 
 * Purpose: Handles user input for adding new items to the list
 * 
 * Key Concepts:
 * - Uses local state (useState) for input value
 * - Validates input before adding
 * - Clears input after successful addition
 * - Demonstrates controlled component pattern
 */
function ListInput({ onAddItem }) {
  // Local state for input field - demonstrates useState hook
  const [inputValue, setInputValue] = useState('');

  /**
   * Handle Add Button Click
   * - Validates input (not empty)
   * - Calls parent's onAddItem function
   * - Clears input field after adding
   */
  const handleAdd = () => {
    // Trim whitespace and check if input is not empty
    const trimmedValue = inputValue.trim();
    
    if (trimmedValue === '') {
      alert('Please enter a valid goal!');
      return;
    }

    // Call parent function to add item
    onAddItem(trimmedValue);
    
    // Clear input field after adding
    setInputValue('');
  };

  /**
   * Handle Enter Key Press
   * - Allows adding items by pressing Enter
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="list-input">
      <input
        type="text"
        className="input-field"
        placeholder="Enter a new goal or objective..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        aria-label="New goal input"
      />
      
      <button 
        className="add-btn" 
        onClick={handleAdd}
      >
        Add Goal
      </button>
    </div>
  );
}

export default ListInput;
