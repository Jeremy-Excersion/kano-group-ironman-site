import { BaseElement } from "../base-element/base-element";
import { storage } from "../data/storage";

export class KanoPage extends BaseElement {
  constructor() {
    super();
  }

  html() {
    return `{{kano-page.html}}`;
  }

  connectedCallback() {
    super.connectedCallback();
    storage.storeGroup("@KANO", "00000000-0000-0000-0000-000000000000");
    window.history.pushState("", "", "/group/map");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

customElements.define("kano-page", KanoPage);
