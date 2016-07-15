import React from 'react';
import Test from '../WidgetList.js';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Product', module)
  .add('Product active', () => {
    return (
      <div>
        <Test />
      </div>
    )
  });
