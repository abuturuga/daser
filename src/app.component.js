import { BaseComponent } from './base.component.js';
import { 
  HeaderComponent,
  StructurePanelComponent,
  PropertiesPanelComponent
} from './components/index';

const COMPONENT_CLASS = 'app-component';

const NAVIGATION_CLASS = 'navigation';
const STRUCTURE_PANEL_CLASS = 'structure-panel';
const PROPERTIES_PANEL_CLASS = 'properties-panel';

export class AppComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }

  getTemplate() {
    return `
      <header class="${NAVIGATION_CLASS}"></header>

      <section class="${STRUCTURE_PANEL_CLASS} panel"></section>
      <section class="${PROPERTIES_PANEL_CLASS} panel"></section>
    `
  }

  renderChildComponents() {
    this.headerComponent = new HeaderComponent();
    this.structurePanelComponent = new StructurePanelComponent();
    this.propertiesPanelComponent = new PropertiesPanelComponent();

    this.attach(this.headerComponent.render(), `.${NAVIGATION_CLASS}`);
    this.attach(this.structurePanelComponent.render(), `.${STRUCTURE_PANEL_CLASS}`);
    this.attach(this.propertiesPanelComponent.render(), `.${PROPERTIES_PANEL_CLASS}`);
  }
}
