import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className='link is-active'>{children}</span>
  }

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

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link