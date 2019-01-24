import { BaseComponent } from '../../base.component.js';
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
      items: ['Main1', 'Main2'],
      icon: 'table_chart'
    }), `.${TABLES_LIST_CLASS}`);

    this.attach(this.referencesListComponent.render({
      items: ['reference1', 'reference2'],
      icon: 'show_chart'
    }), `.${REFERENCES_LIST_CLASS}`);
  }

  getTemplate() {
    return `
      <header class="${PANEL_HEADER_CLASS}"></header>

      <div class="panel__content">
        ${PanelContentComponent(
          'Tables', `<div class="${TABLES_LIST_CLASS}"></div`
        )}

        ${PanelContentComponent(
          'References', `<div class="${REFERENCES_LIST_CLASS}"></div`
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
