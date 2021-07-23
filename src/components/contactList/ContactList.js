import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
