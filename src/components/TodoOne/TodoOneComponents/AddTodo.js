import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.currentTarget.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

export const AddTodo = ({ onCreate }) => {
  const input = useInputValue('');
  function handleSubmit(e) {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form
      className="flex"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit}
    >
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
