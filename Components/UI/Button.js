import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.class}`}
      onClick={props.onClick} type={props.type || 'submit'}>
      {props.children}
    </button>
  );
};

export default Button;