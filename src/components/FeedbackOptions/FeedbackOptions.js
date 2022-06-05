import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(({ id, title }) => (
    <button
      className={s.button}
      key={id}
      onClick={() => onLeaveFeedback(title)}
    >
      {title}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FeedbackOptions;
