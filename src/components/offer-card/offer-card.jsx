import React from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const.js";

const OfferCard = (props) => {
  const {offer, onCardMouseEnter, onHeaderClick} = props;

  return <article className="cities__place-card place-card" onMouseEnter={() => onCardMouseEnter(offer)}>
    {offer.isItPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${offer.rating * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={(evt) => {
          evt.preventDefault();
          onHeaderClick(offer);
        }}>{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  onCardMouseEnter: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  offer: OfferType,
};

export default OfferCard;
