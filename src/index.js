import { AppComponent } from './app.component.js'
import { init } from './state.js';

window.addEventListener('load', () => {
  const $root = document.querySelector('#root');
  const appComponent = new AppComponent();
  $root.appendChild(appComponent.render());
  init();
});
