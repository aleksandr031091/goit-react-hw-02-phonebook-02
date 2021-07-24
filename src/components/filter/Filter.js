import React from "react";

const Filter = ({ onChange, value }) => {
  const onHandleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input type="text" value={value} onChange={onHandleChange} />
    </>
  );
};

export default Filter;
