import { BaseComponent } from '../../base.component.js';
import { SQLModalComponent } from './sql-modal.component.js';
import { GeneratedModalComponent } from './generated-modal.component.js';
import { togglePropertiesPanel, createTable } from '../../actions.js';
import PubSub from '../../pubsub.js';

/** Component CSS classes */
const COMPONENT_CLASS = 'header-component';
const LOGO_CLASS = `${COMPONENT_CLASS}__logo`;
const MOBILE_BUTTON = `${COMPONENT_CLASS}__mobile-menu-btn`;

const WORK_BAR = `${COMPONENT_CLASS}__work-bar`;
const WORK_BAR_BUTTON = `${WORK_BAR}__button`;
const SQL_MODAL_CLASS = 'sql-modal-container';
const GENERATED_MODAL_CLASS = 'generated-modal-container';

export class HeaderComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
    this.tables = [];
  }
  
  renderButtonTemplate(name) {
    return `<button class="${WORK_BAR_BUTTON}" data-type="${name}">
      <i class="material-icons">${name}</i>
    </button>`;
  }

  bindEventListeners() {
    PubSub.on('state:changed', (state) => {
      this.tables = state.tables;
    });

    Array.prototype.forEach.call(this.$element.querySelectorAll(`.${WORK_BAR_BUTTON}`), ($button) => {
      $button.addEventListener('click', event => {
        const type = $button.dataset.type;
        if (type === 'cloud_upload') {
          this.sqlModalComponent.open();
        } else if(type === 'settings') {
          PubSub.emit('state:set', togglePropertiesPanel(true));
        } else if(type === 'save') {
          this.generatedModalComponent.open(this.tables);
        } else if(type === 'add_box') {
          PubSub.emit('state:set', createTable({title: 'NewTable'}));
        }
      });
    });
  }

  renderChildComponents() {
    this.sqlModalComponent = new SQLModalComponent();
    this.generatedModalComponent = new GeneratedModalComponent();

    this.attach(this.sqlModalComponent.render(), `.${SQL_MODAL_CLASS}`);
    this.attach(this.generatedModalComponent.render(), `.${GENERATED_MODAL_CLASS}`);
  }

  getTemplate() {
    const editButtons = ["undo", "redo", "call_made"]
      .map(buttonName => this.renderButtonTemplate(buttonName))
      .join('');

    const addButtons = ["add_box", "keyboard_return", "note_add"]
      .map(buttonName => this.renderButtonTemplate(buttonName))
      .join('');

    const saveButtons = ['cloud_upload', 'save', 'settings']
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
      <div class="${SQL_MODAL_CLASS}"></div>
      <div class="${GENERATED_MODAL_CLASS}"></div>
    `
  }

}
