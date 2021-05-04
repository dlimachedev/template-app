import React from "react";

export const TextField = (props) => {
  const { label, name, value, handleInputChange } = props;
  console.log(props);
  return (
    <>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder={ label }
          name={ name }
          velue={ value }
          onChange={ handleInputChange }
          autoComplete="off"
        />
        <label htmlFor={ name } className="form__label">
          { label }
        </label>
      </div>
    </>
  );
};
