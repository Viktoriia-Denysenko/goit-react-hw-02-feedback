import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <span className={s.description}>Good:</span>
        <span>{good}</span>
      </li>
      <li className={s.item}>
        <span className={s.description}>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li className={s.item}>
        <span className={s.description}>Bad:</span>
        <span>{bad}</span>
      </li>
      <li className={s.item}>
        <span className={s.description}>Total:</span>
        <span>{total}</span>
      </li>
      <li className={s.item}>
        <span className={s.description}>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
