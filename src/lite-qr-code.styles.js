import { css } from 'lit';

export const componentStyles = css`
  :host {
    --border-radius: 16px;
    --padding: 16px;
    color: var(--lite-text-color, #0a0a0a);
    font-family: 'Outfit', sans-serif;
    margin: 0 auto;
    max-width: var(--lite-max-width, 300px);
    text-align: center;
  }

  .card {
    align-items: center; 
    background-color: var(--lite-card-background, #ffffff);
    border-radius: calc(1.5 * var(--border-radius));
    box-shadow: 0px 8px 12px -6px rgba(66, 68, 90, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: calc(1.5 * var(--padding));
    padding: var(--padding);
  }

  .card__qr-container {
    background-color: var(--lite-qr-background, #2b7dfa);
    border-radius: var(--border-radius);
    display: grid;
    padding-bottom: calc(2 * var(--padding));
    padding-top: calc(2 * var(--padding));
    place-content: center;
    width: 100%;
  }

  canvas {
    display: block;
  }

  .card__text-section {
    width: calc(100% - var(--border-radius));
  }

  ::slotted(img) {
    border-radius: var(--border-radius);
    max-width: 100%;
  }

  slot[name='title'] {
    font-family: 'Gabarito', sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  slot[name='caption'] {
    color: #7a7a7a;
    font-size: 0.9em;
    line-height: 1.3;
  }
`;
