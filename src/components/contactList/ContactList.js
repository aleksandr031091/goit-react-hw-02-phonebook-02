import React from "react";
import ContactListItem from "../contactListItem/ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
