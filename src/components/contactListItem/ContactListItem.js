import React from "react";

const ContactListItem = ({ name, number, removeItem, id }) => {
  const onHandleClick = () => {
    removeItem(id);
  };

  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onHandleClick}>Delete</button>
    </li>
  );
};

export default ContactListItem;
