import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);
    
    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    /* const handleSelectChange = (e) => {
      let index = e.nativeEvent.target.selectedIndex;
      //let label = e.nativeEvent.target[index].text;
      //let value = e.target.value;
      setValues({
        ...values,
        [ e.target.name ]: e.target.value,
        label: e.nativeEvent.target[index].text
      });
    } */

    return [ values, handleInputChange, setValues, reset ];

}