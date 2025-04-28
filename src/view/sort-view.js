import AbstractView from '../framework/view/abstract-view.js';

const generateSortButtons = (sort) => {
  const emptyList = sort.every((sortItem) => sortItem.isDisabled);

  return sort.map(({ type, isDisabled }) => `
    <div class="trip-sort__item  trip-sort__item--${type}">

    </div>
  `).join('');
};

const createSortTemplate = (sort) => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${generateSortButtons(sort)}
  </form>
`;

export default class SortView extends AbstractView {
  #sort = null;

  }

  get template() {
    return createSortTemplate(this.#sort);

  }

  #sortTypeChangeHandler = (evt) => {
    const label = evt.target.closest('.trip-sort__btn');
    if (!label) {
      return;
    }

    const sortType = label.dataset.sortType;
    const input = document.getElementById(`sort-${sortType}`);

    if (!input || input.disabled) {
      return;
    }

    this.#onSortTypeChange(sortType);
  };
}
