import TableConfig from './table.config.js';
import { TableComponent } from './table-component/table.comonent.js';
import { AppController } from './app.controller';



const polyline = `
  <polyline points="360, 150 580, 150 580, 300" class="canvas-relation"/>
  <line x1="210" y1="240" x2="211" y2="300"  class="canvas-relation"/>
  
  <line x1="280" y1="480" x2="281" y2="530"  class="canvas-relation"/>
  <line x1="520" y1="480" x2="521" y2="530"  class="canvas-relation"/>
`;

window.addEventListener('load', () => {
  const $svg = document.querySelector('svg');
  const testTable = new TableComponent(TableConfig.get());
  const testTable2 = new TableComponent(TableConfig.get());
  const testTable3 = new TableComponent(TableConfig.get());
  const testTable4 = new TableComponent(TableConfig.get());

  testTable.setPosition(60, 60);
  testTable2.setPosition(60, 300);
  testTable3.setPosition(450, 300);
  testTable4.setPosition(250, 530);

  const t1 = testTable.render(tableData);
  const t2 = testTable2.render(tableData);
  const t3 = testTable3.render(tableData);
  const t4 = testTable4.render(tableData);

  $svg.innerHTML = `
    ${polyline}
    ${t1}
    ${t2}
    ${t3}
    ${t4}
  `;

  const appController =  new AppController();
  appController.init();
});
