import TableConfig from './table-component/table.config.js';

export class CanvasLayoutService {

  constructor() {
    this.tables = [];
  }

  getTablePosition(table) {
    const width = TableConfig.get().width;

    if (this.tables.length === 0) {
      this.tables.push({
        id: table.id,
        x: 100,
        y: 30
      });
    } else {
      const lastIndex = this.tables.length - 1;
      const lastTable = this.tables[lastIndex];
      let y = 30;
      let x = lastTable.x + width + 30;
      if (lastIndex % 2 === 0) {
        y += 300;
        x = 100;
      }
      this.tables.push({
        id: table.id,
        x,
        y
      })
    }

    return this.tables.find(t => t.id === table.id);
  }

}
