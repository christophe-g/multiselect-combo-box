import { ComboBoxPlaceholder } from '@vaadin/combo-box/src/vaadin-combo-box-placeholder.js';
import { ComboBoxScroller } from '@vaadin/combo-box/src/vaadin-combo-box-scroller.js';
import adjustTextColor from './adjust-text-color';

/**
 * An element used internally by `<multiselect-combo-box>`. Not intended to be used separately.
 *
 * @extends ComboBoxScroller
 * @private
 */
class MultiselectComboBoxScroller extends ComboBoxScroller {
  static get is() {
    return 'multiselect-combo-box-scroller';
  }

  /** @private */
  __isItemSelected(item, _selectedItem, itemIdPath) {
    if (item instanceof ComboBoxPlaceholder) {
      return false;
    }

    const host = this.comboBox.getRootNode().host;
    return host._findIndex(item, host.selectedItems, itemIdPath) > -1;
  }

  __updateElement(el, index) {
    super.__updateElement(el, index);
    const comboBox = this.comboBox?.getRootNode().host;
    let background;
    
    if(comboBox && (background = comboBox._getItemColor(el.item, comboBox.itemColorPath))) {
      el.style.backgroundColor = background;
      el.style.color = adjustTextColor(background);
      // we add a class so that the checkbox can inherit the color
      el.classList.add('custom-color');
    } else {
      el.classList.remove('custom-color');
    }
    
    
  }
}

customElements.define(MultiselectComboBoxScroller.is, MultiselectComboBoxScroller);
