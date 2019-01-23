import { BaseComponent } from '../base.component';

const COMPONENT_CLASS = 'navigation';

export class NavigationComponent extends BaseComponent {

  constructor() {
    super('header', COMPONENT_CLASS);
  }

  getTemplate() {
    return `
      <span class="${COMPONENT_CLASS}__logo">DASER</span>

      <section class="work-bar">
        <button class="work-bar__button"><i class="material-icons">undo</i></button>
        <button class="work-bar__button"><i class="material-icons">redo</i></button>
        <button class="work-bar__button"><i class="material-icons">call_made</i></button>
        
        <span class="work-bar__separator"></span>
        
        <button class="work-bar__button"><i class="material-icons">add_box</i></button>
        <button class="work-bar__button"><i class="material-icons">keyboard_return</i></button>
        <button class="work-bar__button"><i class="material-icons">note_add</i></button>
      </section>
    `
  }

}
