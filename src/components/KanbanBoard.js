import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanBoard({ groupedTickets, groupBy }) {
  if (!groupedTickets || typeof groupedTickets !== 'object') {
    console.error('Invalid grouped tickets data, expected an object.');
    return <div>Error: Grouped tickets data is invalid</div>;
  }

  const getIcon = (key) => {
    const iconPath = `/icons_FEtask/${key.toLowerCase().replace(' ', '-')}.svg`;
    console.log('Generated icon path:', iconPath);
    return iconPath;
  };

  const getPriorityLabel = (key) => {
    switch (key) {
      case '4': return 'Urgent';
      case '3': return 'High';
      case '2': return 'Medium';
      case '1': return 'Low';
      case '0': return 'No priority';
      default: return key;
    }
  };

  const getColumnTitle = (key) => {
    return groupBy === 'priority' ? getPriorityLabel(key) : key;
  };

  const sortedGroupKeys = Object.keys(groupedTickets).sort((a, b) => {
    if (groupBy === 'priority') {
      return parseInt(b) - parseInt(a);
    }
    return a.localeCompare(b);
  });

  return (
    <div className="kanban-board">
      {sortedGroupKeys.map((key) => (
        <KanbanColumn
          key={key}
          title={getColumnTitle(key)}
          icon={getIcon(key)}
          tickets={groupedTickets[key]}
          groupBy={groupBy}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;