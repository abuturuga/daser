export class AppController {

  constructor() {
    this.toggleStructureBtn = document.querySelector('#structure-toggle-btn');
    this.togglePropertiesBtn = document.querySelector('#properties-toggle-btn');
    this.structurePanel = document.querySelector('.structure-panel');
    this.tablePropsList = document.querySelector('.table-properties__columns__list');

    this.mobileMenuBtn = document.querySelector('.navigation__mobile-menu-btn');
    this.mobileMenu = document.querySelector('.mobile-menu');
  }

  init() {
    this.seedTableList();
    this.seedTableTree();
    this.handleMobileMenu();
  }

  handleMobileMenu() {
    this.mobileMenuBtn.addEventListener('click', _ => {
      this.mobileMenu.style.display = 'flex';
    });

    const $mbMnClose = this.mobileMenu.querySelector('.mobile-menu__close');
    $mbMnClose.addEventListener('click', _ => {
      this.mobileMenu.style.display = 'none';
    });
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



