import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if ( newInputValue.length <= 1 ) return;
        onNewCategory( newInputValue );
        setinputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
};
