import * as React from 'react';
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {SortType} from '../../const';
import {Sort} from './sort';


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change active sorting item`, () => {
  const onSort = jest.fn();
  const onShowSortMenu = jest.fn();
  const currentSortType = `Popular`;

  const sorting = mount(
      <Sort
        isOpened={true}
        currentSortType={currentSortType}
        onSort={onSort}
        onShowSortMenu={onShowSortMenu}
      />
  );
  const sortingList = sorting.find(`.places__option`);

  sortingList.at(3).simulate(`click`);

  expect(onShowSortMenu.mock.calls.length).toBe(1);
  expect(onSort.mock.calls[0][0]).toBe(SortType.TOP_RATED);
  expect(onSort.mock.calls[0][0]).not.toMatch(currentSortType);
});
