import { inputFieldShared } from '@vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { registerStyles } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('multiselect-input', inputFieldShared, {
  moduleId: 'material-text-field-styles',
});


import '../../src/multiselect-input.js';
