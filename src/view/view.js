import { createElement } from '../render.js';

export default class View {
  #element = null;

  getTemplate() {
    throw new Error('Method not implemented');
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.getTemplate());
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
