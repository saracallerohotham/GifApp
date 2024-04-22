import { useState } from "react";

function AddCategory({ onNewCategory }) {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="search-input"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;
