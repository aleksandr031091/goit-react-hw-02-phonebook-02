import React from "react";

const Filter = ({ onChange, value }) => {
  const onHandleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onHandleChange} />
      </label>
    </>
  );
};

export default Filter;
