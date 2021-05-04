import React from "react";

export const ComboBox = (props) => {

  const { id, name, data } = props;

  return (
    <>
      <div className="select">
        <select name={ name } id={ id }>
          <option value disabled>
            Escoge una opción
          </option>
          {
            data?.map(
              item => ( <option key={item.value} value={item.value}>{item.descripcion}</option> )
            )
          }
        </select>
      </div>
    </>
  );
};
