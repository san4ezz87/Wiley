import React from 'react';
import FilterLink from '../containers/FilterLink';
import SortButton from '../containers/SortButton';

const Footer = () => (
  <p>
  Show:

    <FilterLink filter='SHOW_ALL'>
     All
    </FilterLink>

    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>

    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>

    <SortButton>
      Sort
    </SortButton>
  </p>
);

export default Footer;