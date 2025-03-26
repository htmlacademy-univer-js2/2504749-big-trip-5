import { render, replace } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import CreateEditEventView from '../view/create-form-view.js';
import RoutePointView from '../view/route-point-view.js';
import EventList from '../view/list-view.js';
import RoutePointsModel from '../model/point-model.js';



export default class TripPresenter {
  constructor() {
    this.eventsListContainer = new EventList;
    this.filterContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');
    this.routePointsModel = new RoutePointsModel();
  }

  init() {
    const routePoints = this.routePointsModel.getRoutePoints();
    const filters = generateFilters(routePoints);
    const sort = generateSort(routePoints);

    render(new FilterView(filters), this.filterContainer);
    render(new SortView(sort), this.eventsContainer);

    if (routePoints.length === 0) {
      render(new ListMessageView(messages.everything), this.eventsContainer);
      return;
    }

    render(this.eventsListContainer, this.eventsContainer);

    routePoints.forEach((routePoint) => {
      if (routePoint.city) {
        this.#renderRoutePoint(routePoint);
      }
    });
  }

  #renderRoutePoint(routePoint) {

      }
    };

    const onOpenEditButtonClick = () => {
      replacePointToEditPoint();

    };

    const onCloseEditButtonClick = () => {
      replaceEditPointToPoint();

    };

    const onSubmitButtonClick = () => {
      replaceEditPointToPoint();

    };

    const point = new RoutePointView(routePoint, onOpenEditButtonClick);
    const editPoint = new CreateEditEventView(routePoint, onCloseEditButtonClick, onSubmitButtonClick);

    function replacePointToEditPoint() {
      replace(editPoint, point);
    }

    function replaceEditPointToPoint() {
      replace(point, editPoint);
    }

    render(point, this.eventsListContainer.element);
  }
}
