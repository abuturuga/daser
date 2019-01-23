/**
 * Base class that will be inherit be each html component from app.
 * Has the responsability to implement the rendering boilerplate.
 */
export class BaseComponent {

  constructor(rootType, rootClass) {
    this.$element = null;
    this.buildRootElement(rootType, rootClass);
  }

  /**
   * Prepare the component root element.
   * @param {string} rootType Type of the HTML element div, header etc
   * @param {string} rootClass CSS class of the root element
   * @returns {void}
   */
  buildRootElement(rootType, rootClass) {
    this.$element = document.createElement(rootType);
    this.$element.classList.add(rootClass);
  }

  bindEventListeners() {

  }

  attach($component, selector) {
    const componentContainer = this.$element.querySelector(selector);
    if (!componentContainer) {
      return;
    }

    componentContainer.apppendChild($component);
  }

  render() {
    this.$element.innerHTML = this.getTemplate();
    this.bindEventListeners();
    return this.$element;
  }
}
