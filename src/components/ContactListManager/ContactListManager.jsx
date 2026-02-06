import React, { useState } from "react";
import "./ContactListManager.css";
import Contact from "./Contact";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    job_title: "",
    birthday: "",
    notes: "",
    website: "",
    favorite: false
  });

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    setNewContact((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function addContact() {
    if (newContact.name.trim() !== "") {
      setContacts((c) => [...c, newContact]);
      setNewContact({ 
        name: "", job_title: "", birthday: "", 
        notes: "", website: "", favorite: false 
      });
    }
  }

  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="app-container">
      <h1>Contact List Manager</h1>
      
      <div className="input-section">
        <input className="input-field" type="text" name="name" placeholder="Name" value={newContact.name} onChange={handleInputChange} />
        <input className="input-field" type="text" name="job_title" placeholder="Job Title" value={newContact.job_title} onChange={handleInputChange} />
        <input className="input-field" type="date" name="birthday" value={newContact.birthday} onChange={handleInputChange} />
        <input className="input-field" type="text" name="website" placeholder="Website" value={newContact.website} onChange={handleInputChange} />
        <textarea className="input-field" name="notes" placeholder="Notes" value={newContact.notes} onChange={handleInputChange} />
        
        <label style={{ color: '#7f8c8d', fontSize: '14px' }}>
          Favorite: 
          <input type="checkbox" name="favorite" checked={newContact.favorite} onChange={handleInputChange} style={{ marginLeft: '10px' }} />
        </label>
        
        <button className="add-button" onClick={addContact}>Add Contact</button>
      </div>

      <div className="contacts-section">
        <h2>My Contacts</h2>
        {contacts.length === 0 ? (
          <p className="empty-message">No contacts yet. Add one above!</p>
        ) : (
          <div className="contacts-list">
            {contacts.map((contact, index) => (
              <Contact 
                key={index} 
                data={contact} 
                onDelete={() => deleteContact(index)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;