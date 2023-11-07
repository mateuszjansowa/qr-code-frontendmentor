import { LitElement, html } from 'lit';
import { componentStyles } from './lite-qr-code.styles';
import * as QRCode from 'qrcode';

export class LiteQRCode extends LitElement {
  constructor() {
    super();
    this.url = '';
  }

  static get properties() {
    return {
      url: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  firstUpdated() {
    super.firstUpdated();

    if (!this.url) {
      throw new Error('Provide url attribute to the component');
    }

    this._generateQRCanvas();
  }

  _generateQRCanvas() {
    const canvasEl = this.renderRoot.querySelector('canvas');

    QRCode.toCanvas(
      canvasEl,
      this.url,
      { color: { dark: '#fff', light: '#0000' }, width: 175 },
      error => {
        if (error) {
          throw new Error(error);
        }
      },
    );
  }

  render() {
    return html`<div class="card">
      <div class="card__qr-container">
        <canvas></canvas>
      </div>
      <section class="card__text-section">
        <header>
          <slot name="title"></slot>
        </header>
        <slot name="caption"></slot>
      </section>
    </div>`;
  }
}

window.customElements.define('lite-qr-code', LiteQRCode);
