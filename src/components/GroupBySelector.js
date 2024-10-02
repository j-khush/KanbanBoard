import React from 'react';

function GroupBySelector({ groupBy, setGroupBy }) {
  return (
    <div className="group-by-selector">
      <label htmlFor="group-by-select">Grouping</label>
      <select 
        id="group-by-select"
        name="group-by"
        value={groupBy} 
        onChange={(e) => setGroupBy(e.target.value)}
      >
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupBySelector;