import { BaseComponent } from './base.component.js';
import { HeaderComponent } from './components/index';

const COMPONENT_CLASS = 'app-component';

export class AppComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }

  getTemplate() {
    return `
      <header class="navigation"></header>
    `
  }

  renderChildComponents() {
    this.headerComponent = new HeaderComponent();
    this.attach(this.headerComponent.render(), '.navigation');
  }
}
