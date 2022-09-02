const template = document.createElement("template");
template.innerHTML = `
  <style>
    :root {
      --cell-size: 100px;
      --mark-size: calc(var(--cell-size) * .9);
      }

    .board__cell {
      width: var(--cell-size);
      height: var(--cell-size);
      border: 2px solid rgba(0,0,0,.3);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
    }
    
    // .board__cell:first-child,
    // .board__cell:nth-child(2),
    // .board__cell:nth-child(3) {
    //   border-top: none;
    // }

    // .board__cell:nth-child(3n + 1) {
    //   border-left: none;
    // }

    // .board__cell:nth-child(3n + 3) {
    //   border-right: none;
    // }

    // .board__cell:last-child,
    // .board__cell:nth-child(8),
    // .board__cell:nth-child(7) {
    //   border-bottom: none;
    // }

    .board__cell.x,
    .board__cell.circle {
      cursor: not-allowed;
    }

    .board__cell.x::before,
    .board__cell.x::after,
    .board__cell.circle::before {
      background-color: black;
    }

    .board__cell.x::before,
    .board__cell.x::after {
      content: '';
      position: absolute;
      width: calc(var(--mark-size) * .15);
      height: var(--mark-size);
    }

    .board__cell.x::before {
      transform: rotate(45deg);
    }

    .board__cell.x::after {
      transform: rotate(-45deg);
    }

    .board__cell.circle::before,
    .board__cell.circle::after {
      content: '';
      position: absolute;
      border-radius: 50%;
    }

    .board__cell.circle::before {
      width: var(--mark-size);
      height: var(--mark-size);
    }

    .board__cell.circle::after {
      width: calc(var(--mark-size) * .7);
      height: calc(var(--mark-size) * .7);
      background-color: #14bdac;
    }
  </style>
  <div class="board__cell"  />
`;

export default class PlaceMark extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("place-mark", PlaceMark);
