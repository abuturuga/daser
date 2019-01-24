import { BaseComponent } from '../../../base.component.js';


const COMPONENT_CLASS = 'modal-component';
const HEADER_CLASS = `${COMPONENT_CLASS}__header`;
const HEADER_CLOSE_BUTTON_CLASS = `${HEADER_CLASS}__close-button`
const CONTENT_CLASS = `${COMPONENT_CLASS}__content`;
const MODAL_BACKDROP = `${COMPONENT_CLASS}__backdrop`;
const MODAL_BACKDROP_OPENED = `${MODAL_BACKDROP}--opened`;
const MODAL_BACKDROP_CLOSED = `${MODAL_BACKDROP}--closed`;
const MODAL_CONTENT = `${COMPONENT_CLASS}__content`;

export class ModalComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
    this.$backdrop = null;

    this.state = {
      opened: false
    };
  }

  open() {
    this.setState({opened: true});
  }

  close() {
    this.setState({opened: false});
  }

  bindEventListeners() {
    this.$backdrop = this.$element.querySelector(`.${MODAL_BACKDROP}`);

    this.$element.querySelector(`.${HEADER_CLOSE_BUTTON_CLASS}`)
      .addEventListener('click', event => {
        this.close();
      });
  }

  updateComponent() {
    const { opened } = this.state;

    if (opened) {
      this.$backdrop.classList.add(MODAL_BACKDROP_OPENED);
      this.$backdrop.classList.remove(MODAL_BACKDROP_CLOSED);
    } else {
      this.$backdrop.classList.add(MODAL_BACKDROP_CLOSED);
      this.$backdrop.classList.remove(MODAL_BACKDROP_OPENED);
    }
  }

  getTemplate(properties) {
    return `
      <div class="${MODAL_BACKDROP} ${MODAL_BACKDROP_CLOSED}">
        <div class="${MODAL_CONTENT}">
          <header class="${HEADER_CLASS}">
            <h3 class="${HEADER_CLASS}__title">${properties.title}</h3>
            <span class="${HEADER_CLOSE_BUTTON_CLASS}">&times;</span>
          </header>
          <section class="${CONTENT_CLASS}">
            ${this.getModalContent()}
          </section>
        </div>
      </div>
    `
  }

}
