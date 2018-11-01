import { timingSafeEqual } from "crypto";

export class AppController {

  constructor() {
    this.toggleStructureBtn = document.querySelector('#structure-toggle-btn');
    this.togglePropertiesBtn = document.querySelector('#properties-toggle-btn');
    this.structurePanel = document.querySelector('.structure-panel');
    this.tablePropsList = document.querySelector('.table-properties__columns__list');
  }

  init() {
    this.seedTableList();
    this.seedTableTree();
  }

  seedTableList() {
    const $li = this.tablePropsList.querySelector('li');
    Array(5).fill(0)
      .map(_ => $li.cloneNode(true))
      .forEach($element => {
        this.tablePropsList.appendChild($element)
      });
  }

  seedTableTree() {
    const $tableList = document.querySelector('.table-tree_list');
    const $li = $tableList.querySelector('li');

    Array(5).fill(0)
      .map(_ => $li.cloneNode(true))
      .forEach($element => {
        $tableList.appendChild($element)
      });
  }

  seedRefsList() {

  }
}



