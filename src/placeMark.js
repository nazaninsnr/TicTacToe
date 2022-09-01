const template = document.createElement("template");
template.innerHTML = `
  <style>
    :root {
      --cell-size: 100px;
      --mark-size: calc(var(--cell-size) * .9);
      }

    .cell {
      width: var(--cell-size);
      height: var(--cell-size);
      border: 2px solid rgba(0,0,0,.3);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
    }

    .cell.x,
    .cell.circle {
      cursor: not-allowed;
    }

    .cell.x::before,
    .cell.x::after,
    .cell.circle::before {
      background-color: black;
    }

    .cell.x::before,
    .cell.x::after {
      content: '';
      position: absolute;
      width: calc(var(--mark-size) * .15);
      height: var(--mark-size);
    }

    .cell.x::before {
      transform: rotate(45deg);
    }

    .cell.x::after {
      transform: rotate(-45deg);
    }

    .cell.circle::before,
    .cell.circle::after {
      content: '';
      position: absolute;
      border-radius: 50%;
    }

    .cell.circle::before {
      width: var(--mark-size);
      height: var(--mark-size);
    }

    .cell.circle::after {
      width: calc(var(--mark-size) * .7);
      height: calc(var(--mark-size) * .7);
      background-color: white;
    }
  </style>
  <div class="cell"  />
`;

export default class PlaceMark extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("place-mark", PlaceMark);
