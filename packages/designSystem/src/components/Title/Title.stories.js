import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from "@storybook/addon-knobs";

import myTitle from "./Title.vue";

storiesOf("Title", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { myTitle },
    template: `<my-title>Sample Title</my-title>`
  }));
