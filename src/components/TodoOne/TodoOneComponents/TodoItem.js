import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import s from '../TodoOne.module.css';
import { Context } from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
    padding: '5px',
  },
  input: {
    marginRight: '1rem',
  },
};

export const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push(s.done);
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className={s.rm} onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
