import { BaseElement } from "../base-element/base-element";
import { storage } from "../data/storage";
import { api } from "../data/api";

export class KanoPage extends BaseElement {
  constructor() {
    super();
  }

  html() {
    return `{{kano-page.html}}`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.render();
    this.login();
    this.error = this.querySelector(".login__error");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  async login() {
    try {
      const name = "kanoWorld1";
      const token = "e131519e-0d97-4179-8fc2-25210b56f297";
      api.setCredentials(name, token);
      const response = await api.amILoggedIn();
      if (response.ok) {
        storage.storeGroup(name, token);
        window.history.pushState("", "", "/group");
      } else {
        if (response.status === 401) {
          console.log("Group name or token is incorrect");
        } else {
          const body = await response.text();
          console.log(`Unable to login ${body}`);
        }
      }
    } catch (error) {
      console.log(`Unable to login ${error}`);
    } finally {
    //   this.loginButton.disabled = false;
    }
  }
}

customElements.define("kano-page", KanoPage);
