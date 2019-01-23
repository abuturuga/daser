import { BaseComponent } from '../../base.component.js';
import { PanelHeaderComponent } from '../shared/index.js';


const COMPONENT_CLASS = 'structure-component';
const PANEL_HEADER_CLASS = 'panel-header';


export class StructurePanelComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }

  renderChildComponents() {
    this.panelHeader = new PanelHeaderComponent();

    this.attach(this.panelHeader.render({
      title: 'Structure',
      onClose: () => console.log('on close')
    }), `.${PANEL_HEADER_CLASS}`);
  }

  getTemplate() {
    return `
      <header class="${PANEL_HEADER_CLASS}"></header>

      <div class="panel__content">
        <section class="panel__content__section">
          <header class="panel__content__section__header">
            <h3 class="panel__content__section__header__title">Tables</h3>
          </header>
          <ul class="table-tree_list list-component">
            <li class="list-component__item">
              <i class="material-icons">table_chart</i>
              <span>Table 1</span>
            </li>
          </ul>
        </section>
        <section class="panel__content__section">
          <header class="panel__content__section__header">
            <h3 class="panel__content__section__header__title">Referinces</h3>
          </header>
          <ul class="referince-tree_list list-component">
            <li class="list-component__item">
              <i class="material-icons">show_chart</i>
              <span>Referince 1</span>
            </li>
          </ul>
        </section>
        <section class="note-tree panel__content__section">
          <header class="panel__content__section__header">
            <h3 class="panel__content__section__header__title">Notes</h3>
          </header>
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
        </section>
      </div>
    `
  }

}
