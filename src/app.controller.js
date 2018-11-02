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
    const $structurePanel = document.querySelector('.structure-panel');
    const $propertiesPanel = document.querySelector('.properties-panel');

    this.mobileMenu.addEventListener('click', event => {
      const { target } = event;
      const href = target.getAttribute('href');
      
      if (!href) {
       return;
      }

      setTimeout(() => {
        switch (href) {
          case '#/structure':
            $structurePanel.style.display = 'block';
            $structurePanel.style.transform = 'translate(0, 0)';
            break;
          case '#/Properties':
            $propertiesPanel.style.display = 'block';
            $propertiesPanel  .style.transform = 'translate(0, 0)';
            break;
          case '#/home':
          break;
        }
      }, 200);
      this.mobileMenu.style.display = 'none';
    });

    const $panelMobileClose = document.querySelectorAll('.panel__header__close-btn--mobile');
    [].forEach.call($panelMobileClose, $btn => {
      $btn.addEventListener('click', _ => {
        $structurePanel.style.transform = 'translate(-100%, 0)';
        $propertiesPanel  .style.transform = 'translate(-100%, 0)';
      });
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



