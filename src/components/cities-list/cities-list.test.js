import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list.jsx";

const cities = [
  {
    cityName: `Paris`,
    cityCoords: [48.85341, 2.3488],
  },
];

const currentCity = {
  cityName: `Paris`,
  cityCoords: [48.85341, 2.3488],
};


it(`Should MainScreen render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onCityClick={() => {}}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
