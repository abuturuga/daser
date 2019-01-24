import { BaseComponent } from '../../base.component.js';
import { SQLModalComponent } from './sql-modal.component.js';

/** Component CSS classes */
const COMPONENT_CLASS = 'header-component';
const LOGO_CLASS = `${COMPONENT_CLASS}__logo`;
const MOBILE_BUTTON = `${COMPONENT_CLASS}__mobile-menu-btn`;

const WORK_BAR = `${COMPONENT_CLASS}__work-bar`;
const WORK_BAR_BUTTON = `${WORK_BAR}__button`;
const SQL_MODAL_CLASS = 'sql-modal-container';

export class HeaderComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }
  
  renderButtonTemplate(name) {
    return `<button class="${WORK_BAR_BUTTON}" data-type="${name}">
      <i class="material-icons">${name}</i>
    </button>`;
  }

  bindEventListeners() {
    Array.prototype.forEach.call(this.$element.querySelectorAll(`.${WORK_BAR_BUTTON}`), ($button) => {
      $button.addEventListener('click', event => {
        const type = $button.dataset.type;
        // TODO:
      });
    });
  }

  renderChildComponents() {
    this.sqlModalComponent = new SQLModalComponent();

    this.attach(this.sqlModalComponent.render(), `.${SQL_MODAL_CLASS}`);
    this.sqlModalComponent.open();
  }

  getTemplate() {
    const editButtons = ["undo", "redo", "call_made"]
      .map(buttonName => this.renderButtonTemplate(buttonName))
      .join('');

    const addButtons = ["add_box", "keyboard_return", "note_add"]
      .map(buttonName => this.renderButtonTemplate(buttonName))
      .join('');

    const saveButtons = ['cloud_upload', 'share', 'save']
      .map(buttonName => this.renderButtonTemplate(buttonName))
      .join('');

    return `
      <span class="${LOGO_CLASS}">DASER</span>
      <button class="icon-btn ${MOBILE_BUTTON}">
        <i class="material-icons">menu</i>
      </button>

      <div class="${WORK_BAR}">
        ${ editButtons }
        <span class="${WORK_BAR}__separator"></span>
        ${ addButtons }
      </div>

      <div class="options-bar">
        ${ saveButtons }
      </div>
      ${ this.renderButtonTemplate('more_vert') }
      <div class="${SQL_MODAL_CLASS}"></div>
    `
  }

}
