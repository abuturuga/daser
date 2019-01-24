import { BaseComponent } from './base.component.js';
import { 
  HeaderComponent,
  StructurePanelComponent,
  PropertiesPanelComponent
} from './components/index';
import { CanvasComponent } from './canvas/canvas.component.js';

/** Component CSS classes */
const COMPONENT_CLASS = 'app-component';
const NAVIGATION_CLASS = 'navigation';
const STRUCTURE_PANEL_CLASS = 'structure-panel';
const PROPERTIES_PANEL_CLASS = 'properties-panel';
const CANVAS_COMPONENT_CLASS = 'canvas-component-container';

export class AppComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }

  getTemplate() {
    return `
      <header class="${NAVIGATION_CLASS}"></header>

      <section class="${STRUCTURE_PANEL_CLASS} panel"></section>
      <section class="${CANVAS_COMPONENT_CLASS}"></section>
      <section class="${PROPERTIES_PANEL_CLASS} panel"></section>
    `
  }

  renderChildComponents() {
    this.headerComponent = new HeaderComponent();
    this.structurePanelComponent = new StructurePanelComponent();
    this.propertiesPanelComponent = new PropertiesPanelComponent();
    this.canvasComponent = new CanvasComponent();

    this.attach(this.headerComponent.render(), `.${NAVIGATION_CLASS}`);
    this.attach(this.structurePanelComponent.render(), `.${STRUCTURE_PANEL_CLASS}`);
    this.attach(this.propertiesPanelComponent.render(), `.${PROPERTIES_PANEL_CLASS}`);
    this.attach(this.canvasComponent.render(), `.${CANVAS_COMPONENT_CLASS}`);
  }
}
