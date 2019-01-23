import { BaseComponent } from '../../base.component';

const COMPONENT_CLASS = 'header-component';

export class HeaderComponent extends BaseComponent {

  constructor() {
    super('div', COMPONENT_CLASS);
  }
 
  getTemplate() {
    return `
      <span class="logo">DASER</span>
      <button class="icon-btn navigation__mobile-menu-btn">
        <i class="material-icons">menu</i>
      </button>

      <div class="work-bar">
        <button class="work-bar__button"><i class="material-icons">undo</i></button>
        <button class="work-bar__button"><i class="material-icons">redo</i></button>
        <button class="work-bar__button"><i class="material-icons">call_made</i></button>
        
        <span class="work-bar__separator"></span>
        
        <button class="work-bar__button"><i class="material-icons">add_box</i></button>
        <button class="work-bar__button"><i class="material-icons">keyboard_return</i></button>
        <button class="work-bar__button"><i class="material-icons">note_add</i></button>
      </div>

      <div class="options-bar">
        <button class="work-bar__button">
          <i class="material-icons">cloud_upload</i>
        </button>
        <button class="work-bar__button">
          <i class="material-icons">share</i>
        </button>
        <button class="work-bar__button">
          <i class="material-icons">save</i>
        </button>
      </div>
      <button class="work-bar__button mobile-options-btn">
        <i class="material-icons">more_vert</i>
      </button>
    `
  } 

}
