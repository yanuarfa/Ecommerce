import React, {Fragment} from 'react';
import FilterLists from '../components/FilterLists';
import ItemSection from './ItemSection';

export default function Body() {
  return (
    <Fragment>
      <FilterLists />
      <ItemSection />
    </Fragment>
  );
}
