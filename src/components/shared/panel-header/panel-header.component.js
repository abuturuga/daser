import { BaseComponent } from '../../../base.component';


const COMPONENT_CLASS = 'panel__header';
const CLOSE_BUTTON = `${COMPONENT_CLASS}__close-btn`;
const CLOSE_BUTTON_MOBILE = `${COMPONENT_CLASS}__close-btn--mobile`;

export class PanelHeaderComponent extends BaseComponent {

  constructor() {
    super('header', COMPONENT_CLASS);
  }

  bindEventListeners(properties) {
    this.$closeButton = this.$element.querySelector(`.${CLOSE_BUTTON}`)
    this.$closeButton.addEventListener('click', event => {
      if (properties.onClose && typeof properties.onClose === 'function') {
        properties.onClose(event);
      }
    });
  }

  getTemplate(properties) {
    return `
      <button class="${CLOSE_BUTTON} icon-btn">
        <i class="material-icons">close</i>
      </button>

      <button class="${CLOSE_BUTTON_MOBILE} icon-btn">
        <i class="material-icons">keyboard_backspace</i>
      </button>
      <h2 class="${COMPONENT_CLASS}__title">${properties.title}</h2>
    `;
  }

}
