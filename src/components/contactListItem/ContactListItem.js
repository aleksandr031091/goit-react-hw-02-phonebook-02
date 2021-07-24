import React from "react";

const ContactListItem = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </li>
  );
};

export default ContactListItem;
