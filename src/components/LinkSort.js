import React, { PropTypes } from 'react';

const LinkSort = ({ children, onClick }) => {
  return (
    <a className='link' href='#'
    onClick={e => {
      e.preventDefault();
      onClick()
    }}
    >
      {children}
    </a>
  )
};

LinkSort.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LinkSort;