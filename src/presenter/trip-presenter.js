import { render } from '../framework/render.js';

import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventList from '../view/event-list-view.js';
import RoutePointsModel from '../model/route-point-model.js';
import ListMessageView from '../view/empty-list-message-view.js';
import { generateFilters } from '../mock/filter-data.js';
import { messages } from '../mock/message-data.js';
import { generateSort } from '../mock/sort-data.js';
import RoutePointPresenter from './route-point-presenter.js';

    this.filterContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');
  }

  init() {

    this.#renderFilters(this.#routePoints);
    this.#renderSort(this.#routePoints);

    if (!this.#routePoints.length) {
      this.#renderEmptyList();
      return;
    }

    this.#renderRoutePointsList(this.#routePoints);
  }


  #renderFilters(routePoints) {
    const filters = generateFilters(routePoints);
    render(new FilterView(filters), this.filterContainer);
  }

  #renderSort(routePoints) {
    const sort = generateSort(routePoints);

  }

  #renderEmptyList() {
    render(new ListMessageView(messages.everything), this.eventsContainer);
  }

  #renderRoutePointsList(routePoints) {
    render(this.#eventsListContainer, this.eventsContainer);

    routePoints.forEach((routePoint) => {

        this.#renderRoutePoint(routePoint);
      }
    });
  }

  #onDataChange = (updatedPoint) => {
    this.#routePoints = updatePoint(this.#routePoints, updatedPoint);
  };

  #onModeChange = () => {
    this.#routePointsPresenter.forEach((point) => point.resetPointMode());
  };

  #renderRoutePoint(routePoint) {
    const routePointPresenter = new RoutePointPresenter(
      this.#eventsListContainer.element,
      this.#onDataChange,
      this.#onModeChange
    );

    routePointPresenter.init(routePoint);
    this.#routePointsPresenter.set(routePoint.id, routePointPresenter);
  }
}
