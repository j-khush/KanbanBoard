import React from 'react';
import TicketCard from './TicketCard';

function KanbanColumn({ title, icon, tickets = [], groupBy }) {
  const totalTickets = tickets.length;

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Urgent': return '/icons_FEtask/priority4.svg';
      case 'High': return '/icons_FEtask/priority3.svg';
      case 'Medium': return '/icons_FEtask/priority2.svg';
      case 'Low': return '/icons_FEtask/priority1.svg';
      case 'No priority': return '/icons_FEtask/priority0.svg';
      default: return null;
    }
  };

  const priorityIcon = groupBy === 'priority' ? getPriorityIcon(title) : null;

  console.log('Column Title:', title);
  console.log('Group By:', groupBy);
  console.log('Priority Icon:', priorityIcon);

  return (
    <div className="kanban-column">
      <h3>
        {groupBy === 'priority' && priorityIcon && (
          <img 
            src={process.env.PUBLIC_URL + priorityIcon}
            alt={title} 
            className="column-icon" 
            onError={(e) => {
              console.error('Error loading priority icon:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        )}
        {groupBy !== 'priority' && icon && (
          <img 
            src={process.env.PUBLIC_URL + icon}
            alt={title} 
            className="column-icon" 
            onError={(e) => {
              console.error('Error loading icon:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        )}
        {title} 
        {groupBy === 'user' && (
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=random`} 
            alt={title} 
            className="user-avatar" 
          />
        )}
        <span className="ticket-count">{totalTickets}</span>
      </h3>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} groupBy={groupBy} />
      ))}
    </div>
  );
}

export default KanbanColumn;
