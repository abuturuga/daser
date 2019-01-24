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

      this.tables.push({
        id: table.id,
        x: lastTable.x + width + 30,
        y: 30
      })
    }

    return this.tables.find(t => t.id === table.id);
  }

}
