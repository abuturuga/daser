export function PanelContentComponent(title, content) {
  return `
    <section class="panel__content__section">
      <header class="panel__content__section__header">
        <h3 class="panel__content__section__header__title">${title}</h3>
      </header>
      ${content}
    </section>
  `;
}
