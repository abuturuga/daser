import { AppComponent } from './app.component.js'
import { init } from './state.js';
import { seed } from './seed-test';

window.addEventListener('load', () => {
  const $root = document.querySelector('#root');
  const appComponent = new AppComponent();
  $root.appendChild(appComponent.render());
  init();
  seed();
});
