import { BaseComponent } from '../../base.component.js';
import PubSub from '../../pubsub.js';
import {
  PanelHeaderComponent,
  PanelContentComponent,
  ListComponent
} from '../shared/index.js';

/** Component CSS classes */
const COMPONENT_CLASS = 'structure-component';
const PANEL_HEADER_CLASS = 'panel-header';
const TABLES_LIST_CLASS = 'tables-list-container';
const REFERENCES_LIST_CLASS = 'reference-list-container';

export class StructurePanelComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);

    this.state = {
      tables: [],
      references: []
    };

    this.onTableSelect = this.onTableSelect.bind(this);
    this.onReferenceSelect = this.onReferenceSelect.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

    PubSub.on('state:changed', this.handleStateChange);
  }

  handleStateChange(state) {
    const { tables, references } = state;

    this.setState({
      tables: tables.map(table => table.title)
    });
  }

  onTableSelect(table) {
    console.log(table);
  }

  onReferenceSelect(reference) {
    console.log(reference);
  }

  updateComponent() {
    this.tableListComponent.update({
      items: this.state.tables,
      icon: 'table_chart'
    });

    this.referencesListComponent.update({
      items: this.state.references,
      icon: 'show_chart'
    });
  }

  renderChildComponents() {
    this.panelHeader = new PanelHeaderComponent();
    this.tableListComponent = new ListComponent();
    this.referencesListComponent = new ListComponent();

    this.attach(this.panelHeader.render({
      title: 'Structure',
      onClose: () => console.log('on close')
    }), `.${PANEL_HEADER_CLASS}`);

    this.attach(this.tableListComponent.render({
      items: [],
      icon: 'table_chart',
      onSelect: this.onTableSelect
    }), `.${TABLES_LIST_CLASS}`);

    this.attach(this.referencesListComponent.render({
      items: [],
      icon: 'show_chart',
      onSelect: this.onReferenceSelect
    }), `.${REFERENCES_LIST_CLASS}`);
  }

  getTemplate() {
    return `
      <header class="${PANEL_HEADER_CLASS}"></header>

      <div class="panel__content">
        ${PanelContentComponent(
          'Tables', `<div class="${TABLES_LIST_CLASS}"></div>`
        )}

        ${PanelContentComponent(
          'References', `<div class="${REFERENCES_LIST_CLASS}"></div>`
        )}

        ${PanelContentComponent(
          'Notes', `
            <ul class="note-tree_list">
              <li>
                <div class="input-form">
                  <textarea rows="2">Lorem ipsun</textarea>  
                </div>
              </li>
              <li>
                <div class="input-form">
                  <textarea rows="2">Lorem ipsun</textarea>  
                </div>
                </li>
            </ul>
          `
        )}
      </div>
    `
  }

}
