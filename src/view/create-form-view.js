import AbstractView from '../framework/view/abstract-view.js';
import { formatDateToCustomFormat } from '../utils.js';


const createEventFormTemplate = (routePoint) => {
  const { dateFrom, dateTo, type, city, availableOfferIds, selectedOfferIds, destinationId } = routePoint;

  const startTime = dateFrom ? formatDateToCustomFormat(dateFrom) : '';
  const endTime = dateTo ? formatDateToCustomFormat(dateTo) : '';

  const destination = destinationId ? destinations.find((dest) => dest.id === destinationId) : { name: '', description: '', photos: [] };
  const availableOffers = (offersByType[type] || []).filter((offer) => availableOfferIds.includes(offer.id));

  const offerItems = availableOffers.map((offer) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${selectedOfferIds.includes(offer.id) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${offer.id}">
        <span class="event__offer-title">${offer.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
  `).join('');

  const destinationPhotos = destination.photos.map((photo) => `
    <img class="event__photo" src="${photo}" alt="Event photo">
  `).join('');

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/${type ? `icons/${type.toLowerCase()}.png` : 'logo.png'}" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                <div class="event__type-item">
                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${type.toLowerCase() === 'taxi' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${type.toLowerCase() === 'bus' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${type.toLowerCase() === 'train' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${type.toLowerCase() === 'ship' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>


                <div class="event__type-item">
                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${type.toLowerCase() === 'drive' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${type.toLowerCase() === 'flight' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${type.toLowerCase() === 'check-in' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${type.toLowerCase() === 'sightseeing' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${type.toLowerCase() === 'restaurant' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>


          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          <section class="event__section event__section--offers">
            <h3 class="event__section-title event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${offerItems || 'No offers'}
            </div>
          </section>

          <section class="event__section event__section--destination">
            <h3 class="event__section-title event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destination.description || 'No description'}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${destinationPhotos}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>
  `;
};

export default class CreateEditEventView extends AbstractView {
  #onCloseEditButtonClick = null;
  #onSubmitButtonClick = null;

  constructor(routePoint, onCloseEditButtonClick, onSubmitButtonClick) {
    super();
    this.routePoint = routePoint;
    this.#onCloseEditButtonClick = onCloseEditButtonClick;
    this.#onSubmitButtonClick = onSubmitButtonClick;

    this.#setEventListeners();
  }

  get template() {
    return createEventFormTemplate(this.routePoint);
  }

  #setEventListeners() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeEditButtonClickHandler);

    this.element.querySelector('.event__save-btn').addEventListener('submit', this.#submitButtonClickHandler);
  }

  #closeEditButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onCloseEditButtonClick();
  };

  #submitButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitButtonClick();
  };
}
