import { BaseComponent } from '../../base.component.js';
import PubSub from '../../pubsub.js';
import {
  updateTable,
  togglePropertiesPanel,
  updateTableRow 
} from '../../actions.js';
import {
  PanelHeaderComponent,
  PanelContentComponent
} from '../shared/index.js';

const COMPONENT_CLASS = 'properties-panel-component';
const PANEL_HEADER_CLASS = 'panel-header';

const TABLE_TITLE_INPUT_CLASS = 'table-title-input';
const TABLE_DESCRIPTION_INPUT_CLASS = 'table-description-input';

const COLUMNS_LIST_CLASS = 'table-properties__columns-list';
const COLUMNS_LIST_DELETE_BUTTON_CLASS = `${COLUMNS_LIST_CLASS}__delete`
const COLUMNS_LIST_INPUT_CLASS = `${COLUMNS_LIST_CLASS}__input`;

const HOST_CLASS = 'properties-panel';
const HOST_EXPANDED_CLASS = `${HOST_CLASS}--expanded`;


export class PropertiesPanelComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);

    this.$columnsList = null;
    this.state = {
      table: {}
    };

    this.inputs = {
      title: null,
      description: null
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleColumnInputChange = this.handleColumnInputChange.bind(this);

    PubSub.on('state:changed', this.handleStateChange);
  }

  handleStateChange(state) {
    const { selectedTable, tables } = state;

    const table = tables.find(t => parseInt(t.id) === parseInt(selectedTable));
    if (table) {
      this.setState({table});
    }

    const $host = document.querySelector(`.${HOST_CLASS}`);
    if (state.panels && state.panels.isPropertiesOpen) {
      $host.classList.add(HOST_EXPANDED_CLASS);
    } else {
      $host.classList.remove(HOST_EXPANDED_CLASS);
    }
  }

  updateComponent() {
    const { title, description } = this.state.table;

    this.inputs.title.value = title ? title : '';
    this.inputs.description.value = description ? description : '';
    this.removeColumnsInputsEvents();

    this.$element.querySelector(`.${COLUMNS_LIST_CLASS}`)
      .innerHTML = this.getColumnsListTemplate(this.state.table.rows);
    
    this.setColumnsInputsEvents();
  }

  renderChildComponents() {
    this.panelHeader = new PanelHeaderComponent();

    this.attach(this.panelHeader.render({
      title: 'Properties',
      hasClose: true,
      onClose: () => togglePropertiesPanel(false)
    }), `.${PANEL_HEADER_CLASS}`);
  }

  getColumnsListTemplate(rows) {
    return rows.map((row, index) => `
      <li>
        <div class="input-form">
          <label>Name</label>
          <input class="${COLUMNS_LIST_INPUT_CLASS}"
            data-type="name"
            data-id=${index}
            type="text"
            placeholder="Column Name"
            value="${row.name}"/>
        </div>
        <div class="input-form">
          <label>Type</label>
          <input class="${COLUMNS_LIST_INPUT_CLASS}"
            data-type="type"
            data-id="${index}"
            type="text"
            placeholder="Column Type"
            value="${row.type}"/>
        </div>
        <i class="material-icons" class="${COLUMNS_LIST_DELETE_BUTTON_CLASS}">delete</i>
      </li>
    `).join('');
  }

  getTemplate() {
    return `
      <header class="${PANEL_HEADER_CLASS}"></header>

      <div class="panel__content">
        ${PanelContentComponent(
          'Meta', `
            <div class="input-form">
              <label>Name</label>
              <input type="text" placeholder="Table name" class="${TABLE_TITLE_INPUT_CLASS}"/>
            </div>

            <div class="input-form">
              <label>Description</label>
              <textarea rows="2" placeholder="Table description" class="${TABLE_DESCRIPTION_INPUT_CLASS}"></textarea>
            </div>
          `
        )}

        ${PanelContentComponent(
          'Columns', `
            <ul class="${COLUMNS_LIST_CLASS}">
              ${this.getColumnsListTemplate([])}
            </ul>`
        )}

        ${PanelContentComponent(
          'Aditional Scripts',
          `
            <div class="input-form">
              <label>Before table creation</label>
              <textarea placeholder="SQL code here..."></textarea>
            </div>

            <div class="input-form">
              <label>After table creation</label>
              <textarea placeholder="SQL code here..."></textarea>
            </div>
          `
        )}
      </div>
    `
  }

  handleColumnInputChange(event) {
    const { target } = event;
    const { id, type } = target.dataset;
    const { table } = this.state;
    const value = target.value;
    const index = parseInt(id);
    const row = Object.assign({}, table.rows[index]);
    row[type] = value;
    updateTableRow({id: table.id, row, rowIndex: index});
  }

  setColumnsInputsEvents() {
    const $inputs = this.$element.querySelectorAll(`.${COLUMNS_LIST_INPUT_CLASS}`);

    Array.prototype.forEach.call($inputs, $input => {
      $input.addEventListener('change', this.handleColumnInputChange);
    });
  }

  removeColumnsInputsEvents() {
    const $inputs = this.$element.querySelectorAll(`.${COLUMNS_LIST_INPUT_CLASS}`);

    Array.prototype.forEach.call($inputs, $input => {
      $input.removeEventListener('change', this.handleColumnInputChange);
    });
  }

  setInputs() {
    this.removeColumnsInputsEvents();
    this.setColumnsInputsEvents();

    this.inputs.title = this.$element.querySelector(`.${TABLE_TITLE_INPUT_CLASS}`);
    this.inputs.description = this.$element.querySelector(`.${TABLE_DESCRIPTION_INPUT_CLASS}`);

    this.inputs.title.addEventListener('change', event => {
      const { table } = this.state;
      const { value } = event.target;

      if (table && table.id !== 'undefined') {
        updateTable(Object.assign({}, table, {title: value}));
      }
    });
  }

  render() {
    let $element = super.render();
    this.setInputs();
    return $element;
  }
}
