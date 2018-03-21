import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs'

import myTextfield from './Textfield.vue'

storiesOf('Textfield', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { myTextfield },
    template: `<my-textfield> </my-textfield>`,
  }))
  ;
