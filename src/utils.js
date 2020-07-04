import {SortType} from './const.js';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getOffersInCity = (cityName, offers) => {
  const offersInCity = offers
      .filter((offer) => offer.cityName === cityName);
  return offersInCity;
};

const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export {extend, getOffersInCity, getSortedOffers};
