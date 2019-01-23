import { BaseComponent } from "./base.component.js"

const COMPONENT_CLASS = 'app-component';

export class AppComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }

  getTemplate() {

    return `
      <header class="navigation">
      
      </header>
      <section class="content">
        <section class="structure-panel">
          <h2>Structure</h2>
        </section>
        <section class="canvas">
          <section class="canvas__zoom-bar">
            <button class="canvas__zoom-bar__button">
              <i class="material-icons">aspect_ratio</i>
            </button>

            <button class="canvas__zoom-bar__button">
              <i class="material-icons">zoom_in</i>
            </button>

            <button class="canvas__zoom-bar__button">
              <i class="material-icons">zoom_out</i>
            </button>
          </section>

          <svg class="canvas__svg"></svg>
        </section>
        <section class="properties-panel">
            <h2>Properties</h2>
        </section>
      </section>
    `
  }

}
