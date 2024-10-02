import React from 'react';

function SortBySelector({ sortBy, setSortBy }) {
  return (
    <div className="sort-by-selector">
      <label htmlFor="sort-by-select">Ordering</label>
      <select 
        id="sort-by-select"
        name="sort-by"
        value={sortBy} 
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortBySelector;