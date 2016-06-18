import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/test.js');
}

configure(loadStories, module);
