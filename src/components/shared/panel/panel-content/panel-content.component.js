const COMPONENT_CLASS = 'panel__section'
const HEADER_CLASS = `${COMPONENT_CLASS}__header`;


export function PanelContentComponent(title, content) {
  return `
    <section class="${COMPONENT_CLASS}">
      <header class="${HEADER_CLASS}">
        <h3 class="${HEADER_CLASS}__title">${title}</h3>
      </header>
      ${content}
    </section>
  `;
}
