import { render } from '../render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import FormCreateView from '../view/form-create-view.js';
import FormEditView from '../view/form-edit-view.js';
import RoutePointView from '../view/route-point-view.js';
import EventList from '../view/event-list.js';


export default class ViewPresenter {
  constructor() {
    this.eventsListContainer = new EventList;
    this.filterContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.eventsContainer);
    render(this.eventsListContainer, this.eventsContainer);
    render(new FormEditView(), this.eventsListContainer.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RoutePointView(), this.eventsListContainer.getElement());
    }

    render(new FormCreateView(), this.eventsListContainer.getElement());
  }
}
