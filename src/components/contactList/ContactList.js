import React from "react";
import ContactListItem from "../contactListItem/ContactListItem";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          removeItem={removeContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
