import React from 'react';

function TicketCard({ ticket, groupBy }) {
  const priorityIcon = `/icons_FEtask/priority${ticket.priority}.svg`;
  
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== 'user' && (
          <img
            src={`https://ui-avatars.com/api/?name=${ticket.user}&background=random`}
            alt={ticket.user}
            className="user-avatar"
          />
        )}
      </div>
      <h4 className="ticket-title">
        {groupBy !== 'status' && (
          <img src={`/icons_FEtask/${ticket.status.toLowerCase().replace(' ', '-')}.svg`} alt={ticket.status} className="status-icon" />
        )}
        {ticket.title}
      </h4>
      <div className="ticket-footer">
        {groupBy !== 'priority' && <img src={priorityIcon} alt={`Priority ${ticket.priority}`} className="priority-icon" />}
        <div className="tag">
          <span className="tag-icon">•</span>
          <span className="tag-text">Feature Request</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;