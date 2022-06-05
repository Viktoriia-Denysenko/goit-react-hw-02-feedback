import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
}

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
