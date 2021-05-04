import React from "react";

export const Button = (props) => {

  const { label, onClick, className } = props;

  return (
    <>
      <button 
        className={"btn " + className} 
        onClick={ onClick }
      >
        { label }
      </button>
    </>
  );
};
