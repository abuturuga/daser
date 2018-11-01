import TableConfig from './table.config.js';
import types from './types.js';
import { TableComponent } from './table-component/table.comonent.js';
import { AppController } from './app.controller';

const tableData = {
  title: 'Main table',
  rows: [
    {
      name: 'Col name',
      type: 'VARCHAR(30)',
      default: 'NULL',
      key: types.KEYS.PRIMARY
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    },
    {
      name: 'Col name2',
      type: 'VARCHAR(30)',
      default: 'NULL',
    }
  ]
};

window.addEventListener('load', () => {
  const $svg = document.querySelector('svg');
  const testTable = new TableComponent(TableConfig.get());
  const testTable2 = new TableComponent(TableConfig.get());
  testTable.setPosition(60, 60);
  testTable2.setPosition(60, 300);

  const t1 = testTable.render(tableData);
  const t2 = testTable2.render(tableData);

  $svg.innerHTML = `
    ${t1}
    ${t2}
  `;

  const appController =  new AppController();
  appController.init();
});
