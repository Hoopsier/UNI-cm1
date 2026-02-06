import React from 'react';

function Contact({ data, onDelete }) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <div className="contact-name">
          {data.name} {data.favorite ? "⭐" : ""}
        </div>
        <div className="contact-email">
          {data.job_title} | {data.birthday}
        </div>
        <div style={{ fontSize: '12px', color: '#95a5a6' }}>
          {data.website}
        </div>
      </div>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;