import { ComboBoxItem } from '@vaadin/combo-box/src/vaadin-combo-box-item.js';
import { html } from '@polymer/polymer/polymer-element.js';

/**
 * An element used internally by `<multiselect-combo-box>`. Not intended to be used separately.
 *
 * @extends ComboBoxItem
 * @private
 */
class MultiselectComboBoxItem extends ComboBoxItem {

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          } 

        :host([hidden]) {
          display: none;
        }
        /* Checkmark - we inherit current color instead material-secondary-text */
        :host(.custom-color) [part='checkmark']::before {
          color: inherit;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `;
  }

  static get is() {
    return 'multiselect-combo-box-item';
  }
}

customElements.define(MultiselectComboBoxItem.is, MultiselectComboBoxItem);
