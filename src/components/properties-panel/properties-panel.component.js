import { BaseComponent } from '../../base.component.js';
import PubSub from '../../pubsub.js';
import { updateTable } from '../../actions.js';
import {
  PanelHeaderComponent,
  PanelContentComponent
} from '../shared/index.js';

const COMPONENT_CLASS = 'properties-panel-component';
const PANEL_HEADER_CLASS = 'panel-header';

const TABLE_TITLE_INPUT_CLASS = 'table-title-input';
const TABLE_DESCRIPTION_INPUT_CLASS = 'table-description-input';

export class PropertiesPanelComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);

    this.state = {
      table: {}
    };

    this.inputs = {
      title: null,
      description: null
    };

    this.handleStateChange = this.handleStateChange.bind(this);

    PubSub.on('state:changed', this.handleStateChange);
  }

  handleStateChange(state) {
    const { selectedTable, tables } = state;

    const table = tables.find(t => parseInt(t.id) === parseInt(selectedTable));
    if (table) {
      this.setState({table});
    }
  }

  updateComponent() {
    const { title, description } = this.state.table;

    this.inputs.title.value = title;
    this.inputs.description.value = description;
  }

  renderChildComponents() {
    this.panelHeader = new PanelHeaderComponent();

    this.attach(this.panelHeader.render({
      title: 'Properties',
      onClose: () => console.log('on close')
    }), `.${PANEL_HEADER_CLASS}`);
  }

  getColumnsListTemplate() {
    return `
    <ul class="table-properties__columns__list">
      <li>
        <div class="input-form">
          <label>Name</label>
          <input type="text" placeholder="Column Name"/>
        </div>
        <div class="input-form">
          <label>Type</label>
          <input type="text" placeholder="Column Type"/>
        </div>
        <span class="input-checkbox">
          <label><span>Not Null</span>
            <i class="material-icons">check_box</i>
          </label>
        </span>
        <span class="input-checkbox">
          <label><span>PK</span>
            <i class="material-icons">check_box</i>
          </label>
        </span>
        <i class="material-icons">edit</i>
        <i class="material-icons">delete</i>
      </li>
    </ul>
    `;
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
            <div class="table-properties__columns__header">
              <label>Name</label>
              <label>Type</label>
              <label>NL</label>
              <label>PK</label>
            </div>
            ${this.getColumnsListTemplate()}
          `
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

  setInputs() {
    this.inputs.title = this.$element.querySelector(`.${TABLE_TITLE_INPUT_CLASS}`);
    this.inputs.description = this.$element.querySelector(`.${TABLE_DESCRIPTION_INPUT_CLASS}`);

    this.inputs.title.addEventListener('change', event => {
      const { table } = this.state;
      const { value } = event.target;

      if (table && table.id !== 'undefined') {
        PubSub.emit('state:set', updateTable(Object.assign({}, table, {title: value})));
      }
    });
  }

  render() {
    let $element = super.render();
    this.setInputs();
    return $element;
  }
}
